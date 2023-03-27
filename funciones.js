export function funcion1(n, text) {
  /**
  Cada frase debe comenzar con ​n​ espacios en blanco (después de un punto seguido) 
  **/
  return text.split('\n').map((paragraph) => paragraph.replace(/\.\s+/g, '.' + ' '.repeat(n))).join('\n');
}

export function funcion2(n, text) {
  /**
  Cada párrafo debe estar separado por ​n​ líneas (después de un punto aparte) 
  **/
  return text.replace(/\.\n+/g, '.' + '\n'.repeat(n));
}

export function funcion3(n, text) {
  /**
  El ancho del texto debe ser a lo más ​n​ (sin cortar palabras)
  **/
  return text.split("\n")
  .map((paragraph) => paragraph.trim().match(new RegExp(`.{1,${n}}(\\s|$)|\\S+?\\s`, "g")).join("\n"))
  .join("\n");
}

export function funcion4(n, text) {
  /**
  Cada párrafo debe tener ​n​ espacios de sangría
  **/
  return ' '.repeat(n) + text.replace(/\n/g, '\n' + ' '.repeat(n));
}

export function funcion5(n, text) {
  /**
  Se ignoran los párrafos que tienen menos de ​n​ frases
  **/
  return text.split('\n').filter((line) => { return line.split('.').filter((line) => { return line !== ''}).length > n; }).join('\n');
}

export function funcion6(n, text) {
  /**
  Se ignoran los párrafos que tienen mas de ​n​ frases
  **/
  return text.split('\n').filter((line) => { return line.split('.').filter((line) => { return line !== ''}).length <= n; }).join('\n');
}

export function funcion7(text) {
  /**
  Cada frase debe aparecer en párrafo aparte
  **/
  return text.replace(/\.\s+/g, '.\n');
}

export function funcion8(n, text) {
  /**
  Solo las primeras ​n​ frases de cada párrafo
  **/
  return text.split('\n').map((paragraph) => { return paragraph.split(/\.\s+/g).slice(0,n).join('. '); }).join('\n');
}


