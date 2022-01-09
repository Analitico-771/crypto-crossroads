
const dogOne = {
    breed: 'pug',
    sex: 'female',
    age: '1.5',
    weight: '3',
    insurance: 'y'
};

const groceryList = {
    eggs: 3.00,

    milk: 4.25,

    bread: 2.25
};

let breadPrice = groceryList.bread;

const personOne = {
    head: {
        hair: 'black',
        face: {
            eyes: 'brown',
            nose: 'anglo',
            mouth: 'lips',
            ears: 'huge',
            chin: 'sharp',
        },
    },
    friends: ['mike', 'johnny', 'bobby'],
};

console.log(personOne);
// data analytics is about establishing degrees of certainty as it relates to accuracy

// const nose = personOne.head.face.nose

// for (let i = 0; i < personOne.friends.length; i++) {
//     const name =  personOne.friends[i];
//     console.log(name);
// };

// const personTwo = personOne;

const personTwo = {
    ...personOne,
    head: {
        hair: 'black',
        face: {
            eyes: 'brown',
            nose: 'anglo',
            mouth: 'med lips',
            ears: 'huge',
            chin: 'sharp',
        },
    },
};

const eyes = 'brown';
const nose = 'anglo';
const mouth = 'med lips';
const ears = 'huge';
const chin = 'sharp'; 

console.log(personTwo);

const personThree = {
    ...personOne,
    head: {
        hair: 'black',
        face: {
            eyes: 'brown',
            nose: 'anglo',
            mouth: 'med lips',
            ears: 'huge',
            chin: 'sharp',
        },
    },
};



// const personTwo = {
//     ...personOne,
//     personOne.head.face.mouth: 'med lips'
// };

console.log(personTwo);