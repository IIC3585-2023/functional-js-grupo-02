import _ from 'lodash';
/**
  Solo las primeras ​n​ frases de cada párrafo
  **/

const filterFirstNPhases = (n, text) => {
    const filterFirstNPhasesBasic = (n, text) => {
        return text.split('\n').map((paragraph) => { return paragraph.split(/\.\s+/g).slice(0,n).join('. '); }).join('\n');
    }
    const filterFirstNPhasesN = _.curry(filterFirstNPhasesBasic)(n);
    return filterFirstNPhasesN(text);
}

export default filterFirstNPhases;