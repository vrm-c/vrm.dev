import myst_parser.sphinx_parser
from docutils import nodes
from myst_parser.main import default_parser
from markdown_it.token import Token


def parse(self, inputstring: str, document: nodes.document) -> None:
    """Parse source text.
    :param inputstring: The source string to parse
    :param document: The root docutils node to add AST elements to
    """
    config = document.settings.env.myst_config
    parser = default_parser(config)
    parser.options["document"] = document
    env: dict = {}
    tokens = parser.parse(inputstring, env)
    if not tokens or tokens[0].type != "front_matter":
        # we always add front matter, so that we can merge it with global keys,
        # specified in the sphinx configuration
        tokens = [Token("front_matter", "", 0,
                        content="{}", map=[0, 0])] + tokens

    header_text = None
    if len(tokens) <= 1 or tokens[1].type != 'heading_open':
        # insert heading
        import pathlib
        header_text = Token("text", "", 0, content=pathlib.Path(
            document.current_source).stem)
        tokens = [tokens[0],
                  Token("heading_open", "h1", 1, content="{}", map=[0, 0]),
                  Token("inline", "", 0, content="{}", map=[
                        0, 0], children=[header_text]),
                  Token("heading_close", "h1", -1,
                        content="{}", map=[0, 0])
                  ] + tokens[1:]

    parser.renderer.render(tokens, parser.options, env)

    # fix heading name from front matter
    if header_text:
        field_list = document.children[0]
        if isinstance(field_list, nodes.field_list):
            for field in field_list.children:
                name, body = field.children
                if name.rawsource == 'title':
                    header_text.content = body.rawsource


myst_parser.sphinx_parser.MystParser.parse = parse
