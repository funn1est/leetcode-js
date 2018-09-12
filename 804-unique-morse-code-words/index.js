/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
  const morseList = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let trans = '';
    for (let j = 0; j < word.length; j++) {
      const index = word[j].charCodeAt() - 97;
      trans += morseList[index];
    }
    if (!result.includes(trans)) {
      result.push(trans);
    }
  }
  return result.length;
};

const uniqueMorseRepresentations1 = words => {
  const morseList = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const transWord = word =>
    word
      .split('')
      .reduce((str, letter) => str + morseList[letter.charCodeAt() - 97], '');
  return words.map(transWord).reduce((xs, x) => xs.add(x), new Set()).size;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
console.log('------');
console.log(uniqueMorseRepresentations1(['gin', 'zen', 'gig', 'msg']));
