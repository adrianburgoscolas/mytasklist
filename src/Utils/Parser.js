//Parse a strin to format the string if a tag/pattern is detected (@, #, an email or a link)
export function parser(text, comp) {
  console.log('parsing', text)
  const res =  text?.replaceAll(/(?<!\w|>)(@\w+)|(<span id="at\w+">)(@\w+)(<\/span>)(\w+)/ig, `<span id="at${comp}">$1$3$5</span>`)
    .replaceAll(/(?<!\w|>)(#\w+)|(<span id="hash\w+">)(#\w+)(<\/span>)(\w+)/ig, `<span id="hash${comp}">$1$3$5</span>`)
    .replaceAll(/(?<!\w|>)(\w+\.\w+\.\w+)|(<span id="link\w+">)(\w+\.\w+\.\w+)(<\/span>)(\w+)/ig, `<span id="link${comp}">$1$3$5</span>`)
    .replaceAll(/(?<!\w|>)(\w+@\w+\.\w+)|(<span id="mail\w+">)(\w+@\w+\.\w+)(<\/span>)(\w+)/ig, `<span id="mail${comp}">$1$3$5</span>`)
    .replaceAll(/(<span id="at\w+">)(@\w+)( \w+)(<\/span>)(.+)/ig, `<span id="at${comp}">$2$4$3$5`) 
    .replaceAll(/(<span id="hash\w+">)(#\w+)( \w+)(<\/span>)(.+)/ig, `<span id="hash${comp}">$2$4$3$5`) 
    .replaceAll(/(<span id="link\w+">)(\w+\.\w+\.\w+)( \w+)(<\/span>)(.+)/ig, `<span id="link${comp}">$2$4$3$5`) 
    .replaceAll(/(<span id="mail\w+">)(\w+@\w+\.\w+)( \w+)(<\/span>)(.+)/ig, `<span id="mail${comp}">$2$4$3$5`) 
  return res === undefined?'Error empty': res
}

//shouldParse returns a bool signaling if shoul parse the text
export function shouldParse(text) {
  return /(?<!\w|>)(\w+@\w+\.\w+)|(<span id="mail\w+">)(\w+@\w+\.\w+)(<\/span>)(\w+)|(?<!\w|>)(\w+\.\w+\.\w+)|(<span id="link\w+">)(\w+\.\w+\.\w+)(<\/span>)(\w+)|(?<!\w|>)(#\w+)|(<span id="hash\w+">)(#\w+)(<\/span>)(\w+)|(?<!\w|>)(@\w+)|(<span id="at\w+">)(@\w+)(<\/span>)(\w+)|(<span id="at\w+">)(@\w+)( \w+)(<\/span>)(.+)|(<span id="hash\w+">)(#\w+)( \w+)(<\/span>)(.+)|(<span id="link\w+">)(\w+\.\w+\.\w+)( \w+)(<\/span>)(.+)|(<span id="mail\w+">)(\w+@\w+\.\w+)( \w+)(<\/span>)(.+)/i.test(text)
}

export default {}
