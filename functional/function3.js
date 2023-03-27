import _ from 'lodash';

/**
  El ancho del texto debe ser a lo más ​n​ (sin cortar palabras)
  **/

function chain(n, text) {
  return _.chain(text)
    .split("\n")
    .map((paragraph) => paragraph.trim().match(new RegExp(`.{1,${n}}(\\s|$)|\\S+?\\s`, "g")).join("\n")).join("\n").value()
}

export default function maxWidth(n, text) {
    const maxWidthN = _.curry(chain)(n);
    return maxWidthN(text);
}
