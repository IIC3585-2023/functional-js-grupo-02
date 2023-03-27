import _ from 'lodash';

/**
  Se ignoran los párrafos que tienen menos de ​n​ frases
  **/

  
const filterParagraphs = (n, text) => {
    const filterParagraphsBasic = (n, text) => {
        return text.split('\n').filter((line) => { return line.split('.').filter((line) => { return line !== ''}).length > n; }).join('\n');
    }
    const filterParagraphsN = _.curry(filterParagraphsBasic)(n);
    return filterParagraphsN(text);
}

export default filterParagraphs;