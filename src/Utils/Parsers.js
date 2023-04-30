export function parseUser(text) {
  return text.replaceAll(/(?<!\w)(<span id="at">)?(@\w*)(<\/span>)?(\w+)/ig, '<span id="at">$2$4</span>')
}

export function parseHashtag(text) {
  return text.replaceAll(/(?<!\w)(<span id="hash">)?(#\w*)(<\/span>)?(\w+)/ig, '<span id="hash">$2$4</span>')
}

export function parseMail(text) {
  return text.replaceAll(/(?<!\w)(<span id="mail">)?(\w+@\w+\.\w+)(<\/span>)?(\w+)/ig, '<span id="mail">$2$4</span>')
}

export function parseLink(text) {
  return text.replaceAll(/(?<!\w)(<span id="link">)?(\w+\.\w+\.\w+)(<\/span>)?(\w+)/ig, '<span id="link">$2$4</span>')
}
