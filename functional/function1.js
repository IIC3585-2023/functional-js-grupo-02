import _ from 'lodash';

/**
  Cada frase debe comenzar con ​n​ espacios en blanco (después de un punto seguido) 
  **/

export default function startWithSpaces(n, text) {
    const startWithSpacesBasic = (n, text) => {
    return text.split('\n').map((paragraph) => paragraph.replace(/\.\s+/g, '.' + ' '.repeat(n))).join('\n');
    }
    const startWithNspaces = _.curry(startWithSpacesBasic)(n);
    return startWithNspaces(text);
}
