'use strict';

function vowelAndConsonants(s){
    const vowelChars = ['a', 'e', 'i', 'o', 'u'];
    const vowels = [], consonants = [];
    for (let i = 0; i < s.length; i++) {
        if(vowelChars.indexOf(s[i].toLowerCase()) !== -1){
            vowels.push(s[i]);
        }else{
            consonants.push(s[i]);;
        }
    }
    console.log(vowels.join("\n"));
    console.log(consonants.join("\n"));
}

vowelAndConsonants('javascriptloops');