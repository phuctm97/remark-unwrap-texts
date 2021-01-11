import { Plugin } from "unified";
import { Text } from "mdast";
import visit from "unist-util-visit";

/**
 * Unwraps `text` nodes in Markdown.
 *
 * Is useful when publishing to platforms like DEV.to, Medium, Hashnode, etc.
 * These platforms may not support text wraps and generate unexpected newlines.
 */
const plugin: Plugin = () => (tree) => {
  visit(tree, "text", (text: Text) => {
    text.value = text.value.replace(/\n/g, " ");
  });
};

export = plugin;
