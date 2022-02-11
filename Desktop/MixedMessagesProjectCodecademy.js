let jobArray = ['model', 'lawyer', 'doctor', 'dentist', 'teacher', 'detective', 'engineer', 'actor', 'singer', 'athlete'];
let locationArray = ['Los Angeles', 'New York', 'Hawaii', 'Italy', 'Miami', 'Mexico', 'Japan', 'Australia', 'London', 'Paris'];
let homeArray = ['lake house', 'cabin', 'modern mansion', 'beach house', 'castle', 'igloo', 'treehouse', 'van', 'penthouse apartment', 'cottage'];

let generateRandomJob = () => {
    let randomIndex = Math.floor(Math.random() * jobArray.length);
    if ((jobArray[randomIndex] === 'actor') || (jobArray[randomIndex] === 'athlete') || (jobArray[randomIndex] === 'engineer')) {
        return `an ${jobArray[randomIndex]}`;
    } else {
      return `a ${jobArray[randomIndex]}`;
    }
};

function generateRandomLocation() {
    let randomIndex = Math.floor(Math.random() * locationArray.length);
    return locationArray[randomIndex];
}

let generateRandomHome = () => {
    let randomIndex = Math.floor(Math.random() * homeArray.length);
    if (homeArray[randomIndex] === 'igloo') {
        return `an ${homeArray[randomIndex]}`;
    } else {
    return `a ${homeArray[randomIndex]}`;
  }
};

let randomJob = generateRandomJob();
let randomLocation = generateRandomLocation();
let randomHome = generateRandomHome();

let generateRandomLife = () => {
    generateRandomJob();
    generateRandomLocation();
    generateRandomHome();
    console.log(`You will be ${randomJob} living in ${randomLocation} in ${randomHome}.`)
};

generateRandomLife();