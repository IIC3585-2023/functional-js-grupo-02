import _ from 'lodash';

/**
  Cada párrafo debe tener ​n​ espacios de sangría
  **/

  
const nIntendation = (n, text) => { 
    const reformatTextBasic = (n, text) => {
        return ' '.repeat(n) + text.replace(/\n/g, '\n' + ' '.repeat(n));
    }
    const reformatTextNspaces = _.curry(reformatTextBasic)(n);
    return reformatTextNspaces(text);
}

export default nIntendation;