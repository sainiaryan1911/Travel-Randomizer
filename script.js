var Destinations=[
    'Delhi for history and food',
    'Agra for the iconic Taj Mahal',
    'Rajasthan for forts and palaces',
    'The Ganges (Varanasi) for spirituality',
    'Ranthambore for wildlife',
    'Goa for Beaches',
    'Kerala Backwaters for relaxation',
    'Munnar for tea and nature',
    'Madurai for South Indian culture',
    'Amritsar for the Golden Temple'
];

var images=[
    'DelhiFoodTour',
    'TheTajMahal',
    'RajasthanForts',
    'TheGanges',
    'Ranthambore',
    'GoaBeaches',
    'KerelaBackwaters',
    'Munnar',
    'Madurai',
    'Amritsar'
];

var source=[
    // Delhi
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223994.25250189906!2d76.95126442191443!3d28.69233287667881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1624610521542!5m2!1sen!2sin",

    // Taj Mahal
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4005538501738!2d78.03995351501723!3d27.17514478301529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1624610722650!5m2!1sen!2sin",

    // Rajasthan
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308812.840609631!2d69.3793534024362!3d26.560096753253628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1624609337255!5m2!1sen!2sin",

    // Varanasi
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982811689!2d82.92106857551333!3d25.32074609983092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1624610940863!5m2!1sen!2sin",

    // Ranthambore
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57362.30064665667!2d76.45910315073816!3d26.028850880004054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971d8f668d65517%3A0x6eb9f78b60bac925!2sRanthambore%20National%20Park!5e0!3m2!1sen!2sin!4v1624610988314!5m2!1sen!2sin",

    // Goa
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492485.53498906!2d73.73211209335938!3d15.347038036232696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1624611031026!5m2!1sen!2sin",

    // Kerela
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016734.7563403626!2d73.88377119061819!3d10.532723926668115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1624611071878!5m2!1sen!2sin",

    // Munnar
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.899616080393!2d77.05542312677773!3d10.080649434733436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794d099a6d%3A0x63250e5553c7e0c!2sMunnar%2C%20Kerala%20685612!5e0!3m2!1sen!2sin!4v1624611111212!5m2!1sen!2sin",

    // Madurai
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62883.096305798266!2d78.08780403928236!3d9.917835034257973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1624611142121!5m2!1sen!2sin",

    // Amritsar
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.38024378539!2d74.80008007700916!3d31.633525033035543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1624611176690!5m2!1sen!2sin"


];

// Adding the Travel suggestion.
var RandomNumber= Math.floor(Math.random()*Destinations.length);
document.write("<h1>Travel Suggestions</h1>")
document.write("<h2>"+Destinations[RandomNumber]+".</h2>")

// Adding image related to the travel suggestion.
let image = document.createElement('img');
image.src  = 'images/'+images[RandomNumber]+'.jpg';
image.id="image";
document.body.appendChild(image);

// Adding a break.
let Break=document.createElement('br');
document.body.appendChild(Break);

// Adding map.
document.write("<h3>Checkout the location.</h3>")
let map=document.createElement('iframe');
map.src= source[RandomNumber];
map.allowFullscreen="";
map.loading="lazy";
document.body.appendChild(map);