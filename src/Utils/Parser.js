function parser(text, comp) {
  return text.replaceAll(/(?<!\w)(<span id="at\w+">)?(@\w*)(<\/span>)?(\w+)/ig, `<span id="at${comp}">$2$4</span>`)
    .replaceAll(/(?<!\w)(<span id="hash\w+">)?(#\w*)(<\/span>)?(\w+)/ig, `<span id="hash${comp}">$2$4</span>`)
    .replaceAll(/(?<!\w)(<span id="link\w+">)?(\w+\.\w+\.\w+)(<\/span>)?(\w+)/ig, `<span id="link${comp}">$2$4</span>`)
    .replaceAll(/(?<!\w)(<span id="mail\w+">)?(\w+@\w+\.\w+)(<\/span>)?(\w+)/ig, `<span id="mail${comp}">$2$4</span>`)
}

export default parser
