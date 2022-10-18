const speakers = [{
  photo: 'images/portrait1.png',
  name: 'Magnus Carlsen',
  job: 'Norwegian chess grandmaster',
  line: 'url',
  description: 'Sven Magnus Øen Carlsen (born 30 November 1990) is a Norwegian chess grandmaster who is the reigning five-time World Chess Champion.'
}, {
  photo: 'images/portrait2.png',
  name: 'Hikaru Nakamura',
  job: 'American chess grandmaster ',
  line: 'url',
  description: 'Hikaru Nakamura (born December 9, 1987) is a Japanese-American chess grandmaster and Twitch streamer.'
}, {
  photo: 'images/portrait3.png',
  name: 'Fabiano Caruana',
  job: 'American-Italian chess player',
  line: 'url',
  description: 'Fabiano Luigi Caruana (born July 30, 1992) is an Italian-American chess player. A chess prodigy, Caruana became a grandmaster at the age of 14 years.'
}, {
  photo: 'images/portrait4.png',
  name: 'Viswanathan Anand',
  job: 'Indian chess grandmaster',
  line: 'url',
  description: 'Viswanathan "Vishy" Anand (born 11 December 1969) is an Indian chess grandmaster and a five-time world chess champion.'
}, {
  photo: 'images/portrait5.png',
  name: 'Garry Kasparov',
  job: 'Chess grandmaster',
  line: 'url',
  description: 'Garry Kimovich Kasparov (born 13 April 1963) is a Russian chess grandmaster, former World Chess Champion, writer, political activist and commentator.'
}, {
  photo: 'images/portrait6.png',
  name: 'Alireza Firouzja',
  job: 'Iranian-French chess grandmaster',
  line: 'url',
  description: 'Alireza Firouzja is an Iranian-French chess grandmaster. Firouzja is the youngest ever 2800-rated player.'
}];

const speakerMain = document.querySelector('.speaker-main');
speakers.forEach((speaker, index) => {
  const list = document.createElement('li');
  list.classList.add('speaker-content')
  const text = `<img class="chess-speaker1" src="${speaker.photo}">
  <div class="text-speaker">
    <h3>${speaker.name}</h3>
    <p>${speaker.job}</p>
    <div class="second-p">
      <p>${speaker.description}</p>
    </div>
  </div>`;

  list.innerHTML = text
  speakerMain.appendChild(list);
});
