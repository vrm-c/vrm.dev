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
    if tokens[0].type == 'front_matter':
        #
        # Hugo article migration
        #
        # * get title from frontmatter(yaml)
        #
        import pathlib
        path = pathlib.Path(
            document.current_source)
        title = path.stem
        if title in ('index', '_index'):
            title = path.parent.stem

        try:
            import yaml
            data = yaml.safe_load(tokens[0].content)
            title = data['title']
        except Exception as ex:
            pass

        header_text = Token("text", "", 0, content=title, map=tokens[0].map)
        tokens = [tokens[0],
                  Token("heading_open", "h1", 1,
                        content="{}", map=header_text.map),
                  Token("inline", "", 0, content="{}",
                        map=header_text.map, children=[header_text]),
                  Token("heading_close", "h1", -1,
                        content="{}", map=header_text.map)
                  ] + tokens[1:]

    parser.renderer.render(tokens, parser.options, env)


# myst_parser.sphinx_parser.MystParser.parse = parse
