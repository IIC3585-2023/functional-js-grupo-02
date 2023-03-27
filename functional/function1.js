import _ from 'lodash';

/**
  Cada frase debe comenzar con ​n​ espacios en blanco (después de un punto seguido) 
  **/

export default function startWithSpaces(n, text) {
    const startWithSpacesBasic = (n, text) => {
    return text.replace(/\.\s+/g, '.' + ' '.repeat(n));
    }
    const startWithNspaces = _.curry(startWithSpacesBasic)(n);
    return startWithNspaces(text);
}
