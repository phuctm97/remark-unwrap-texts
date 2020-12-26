# 📋 remark-unwrap-texts

![npm version](https://img.shields.io/npm/v/remark-unwrap-texts)
![GitHub license](https://img.shields.io/github/license/phuctm97/remark-unwrap-texts)

Unwraps text nodes in Markdown, is useful when publishing to platforms like
DEV.to, Medium, Hashnode, etc. These platforms may not support text wraps and
generate unexpected newlines.

## Example

### Before

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies massa
ut nisl commodo lacinia. Phasellus convallis in urna eget pharetra. Quisque
pharetra, odio eget lobortis commodo, orci metus laoreet velit, eget finibus
orci ipsum laoreet mauris. In vel neque nec augue fringilla porta.
```

### After

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies massa ut nisl commodo lacinia. Phasellus convallis in urna eget pharetra. Quisque pharetra, odio eget lobortis commodo, orci metus laoreet velit, eget finibus orci ipsum laoreet mauris. In vel neque nec augue fringilla porta.
```

## Usage

### Install

```bash
yarn add remark-unwrap-texts
```

### Configure

Unified / Remark:

```js
unified()
  .use(require("remark-parse"))
  .use(require("remark-unwrap-texts"))
  .use(require("remark-stringify"));
```

```js
remark().use(require("remark-unwrap-texts"));
```

MDX:

```js
mdx(mdxText, {
  remarkPlugins: [require("remark-unwrap-texts")],
});
```

---

Made by [@phuctm97].

<!-- Links -->

[@phuctm97]: https://twitter.com/phuctm97
