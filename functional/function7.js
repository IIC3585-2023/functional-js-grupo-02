import _ from 'lodash';

/**
  Cada frase debe aparecer en párrafo aparte
  **/

  
const splitPhrases = (text) => {
    return text.replace(/\.\s+/g, '.\n');
}

export default splitPhrases;