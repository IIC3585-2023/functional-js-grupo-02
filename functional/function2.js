import _ from 'lodash';

/**
  Cada párrafo debe estar separado por ​n​ líneas (después de un punto aparte) 
  **/

export default function separateWithSpaces(n, text) {
    const separateWithSpacesBasic = (n, text) => {
    return text.replace(/\.\n+/g, '.' + '\n'.repeat(n));
    }
    const separateWithNspaces = _.curry(separateWithSpacesBasic)(n);
    return separateWithNspaces(text);
}
