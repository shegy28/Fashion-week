function openNav() {
  document.getElementById('drop-down').style.display = 'block';
  document.getElementById('container').style.filter = 'blur(7px)';
}
openNav();

function closeNav() {
  document.getElementById('drop-down').style.display = 'none';
  document.getElementById('container').style.filter = 'blur(0px)';
}
closeNav();

const speakers = [
  {
    name: 'Mary Jane',
    image: './images/speaker1.jpg',
    details1: 'Known as "MJ", is an American fashion designer and the creator of DKNY clothing labels.',
    details2: 'Education: Parsons School of Design | The New School.',
  },

  {
    name: 'Marc Jacobs',
    image: './images/speaker2.jpg',
    details1: 'Marc Jacobs is an American fashion designer.',
    details2: 'He is the head designer for his own fashion label, Marc Jacobs.',
  },

  {
    name: 'Stella McCartney',
    image: './images/speaker3.jpg',
    details1: 'Stella Nina McCartney CBE is an English fashion designer.',
    details2: 'She is a daughter of British singer-songwriter Paul McCartney.',
  },

  {
    name: 'Giorgio Armani',
    image: './images/speaker4.jpg',
    details1: 'He formed his company, Armani, in 1975, which expanded into, sport and luxury hotels.',
    details2: 'Education: Parsons School of Design | The New School.',
  },

  {
    name: 'Rihanna',
    image: './images/speaker6.jpg',
    details1: 'Robyn Rihanna Fenty NH is a Barbadian singer, and businesswoman.',
    details2: 'Organizations: Fenty Beauty, Clara Lionel Foundation, Fenty.',
  },

  {
    name: 'Wizkid',
    image: './images/speaker 6.jpg',
    details1: 'Ayodeji Ibrahim Balogun, known professionally as Wizkid, is a Nigerian singer and songwriter.',
    details2: 'Awards: MTV Europe Music Award for Best African Act.',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  document.querySelector('.speakers-holder').innerHTML += ` 
    <div class="speaker">
        <div class="speaker-image"><img src="${speakers[i].image}" alt="${speakers[i].name}">
        </div>
        <div class="speaker-text">
            <div>
                <h4 class="speaker-name">${speakers[i].name}</h4>
                <p class="speaker-title">${speakers[i].details1}</p>
            </div>
            <hr class="hr2">
            <div>
                <p class="speaker-title2">${speakers[i].details2}</p>
            </div>
        </div>
    </div>
    `;
}