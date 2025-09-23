function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return str.replace(/[&<>"']/g, (char) => entities[char]);
}

console.log(convertHTML('Dolce & Gabbana'));        
console.log(convertHTML('Stuff in "quotation"'));   
console.log(convertHTML("1 > 0 and 0 < 1"));        
console.log(convertHTML("Shakespeare's quote"));    
