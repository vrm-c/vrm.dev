import unified from "unified";
import { Paragraph } from "mdast";
import { Node, Parent } from "unist";
import { VFileCompatible, VFile } from "vfile";
import { inspect } from "unist-util-inspect";
import { visit } from "unist-util-visit";
// ESM port of https://github.com/tkhquang/gridsome-remark-figure-caption
import { whitespace } from "hast-util-whitespace";
import { remove } from "unist-util-remove";
import { fromMarkdown } from "mdast-util-from-markdown";


// https://github.com/josestg/rehype-figure
function rehype_figure(
  node: any, // this is mdx node
  index: number,
  parent: Parent | undefined
) {
  if (node.type != 'mdxJsxTextElement') {
    return;
  }
  if (node.name == 'img') {
    return;
  }
  // if(node.tagName!="img"){
  //   return;
  // }
  console.log(inspect(node));
}

// [unified を使って Markdown を拡張する](https://zenn.dev/januswel/articles/745787422d425b01e0c1)
const nop: unified.Plugin = () => {
  return (tree: Node, file: VFileCompatible) => {
    // @ts-ignore
    const path = file.path;
    if (!path) {
      console.log(inspect(file));
      return;
    }
    if (!path.endsWith("univrm_export.md")) {
      // debug
      console.log(file, inspect(tree));
      return;
    }

    // process
    console.log(inspect(tree));
    // @type-ignore
    visit(tree, rehype_figure);
  }
};
export default nop


