/**
 *
 * @param {String} language
 */
function greet(language) {
  let greets = '';
  const data = [
    { language: 'english', greets: 'Welcome' },
    { language: 'czech', greets: 'Vitejte' },
    { language: 'danish', greets: 'Velkomst' },
    { language: 'dutch', greets: 'Welkom' },
    { language: 'estonian', greets: 'Tere tulemast' },
    { language: 'finnish', greets: 'Tervetuloa' },
    { language: 'flemish', greets: 'Welgekomen' },
    { language: 'french', greets: 'Bienvenue' },
    { language: 'german', greets: 'Willkommen' },
    { language: 'irish', greets: 'Failte' },
    { language: 'italian', greets: 'Benvenuto' },
    { language: 'latvian', greets: 'Gaidits' },
    { language: 'lithuanian', greets: 'Laukiamas' },
    { language: 'polish', greets: 'Witamy' },
    { language: 'spanish', greets: 'Bienvenido' },
    { language: 'swedish', greets: 'Valkommen' },
    { language: 'welsh', greets: 'Croeso' },
  ];
  const foundGreet = data.find((el) => el.language === language);
  return foundGreet ? foundGreet.greets : 'Welcome';
}

console.log(greet('dutch'));
