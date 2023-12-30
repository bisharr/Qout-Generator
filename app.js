'use strcit';
let qout = document.querySelector('.Qout');
let person = document.querySelector('.person');
let btn = document.querySelector('.btn');
console.log(btn);

let qouts = [
  {
    qout: '“New year—a new chapter, new verse, or just the same old story? Ultimately we write it. The choice is ours.”',
    person: '-Alex Morritt',
  },
  {
    qout: '“I like the dreams of the future better than the history of the past.” ',
    person: '—Thomas Jefferson',
  },
  {
    qout: '““People begin to become successful the minute they decide to be.”',
    person: ' Harvey MacKay',
  },
  {
    qout: ' "Write it on your heart that every day is the best day in the year.” ”',
    person: '—Ralph Waldo Emerson',
  },
  {
    qout: '“The object of a New Year is not that we should have a new year. It is that we should have a new soul…”',

    person: ' —Gilbert K. Chesterton',
  },
  {
    qout: '“It is never too late to be what you might have been.” ',
    person: '—George Eliot',
  },
  {
    qout: '“And now we welcome the new year. Full of things that have never been.” ',
    person: 'Rainer Maria Rilke',
  },
  {
    qout: '“Year’s end is neither an end nor a beginning but a going on, with all the wisdom that experience can instill in us.”',

    person: ' —Hal Borland',
  },
  {
    qout: 'The new year stands before us, like a chapter in a book, waiting to be written.” ',

    person: ' ——Melody Beattie',
  },
  {
    qout: '“You can get excited about the future. The past wont Mind',

    person: '―Hillary DePiano',
  },
  {
    qout: '“Each day is a new beginning, the chance to do with it what should be done and not to be seen as simply another day to put in time.” ',

    person: '–Catherine Pulsifer',
  },

  {
    qout: '“Every moment is a fresh beginning.” ',

    person: ' —T.S. Eliot',
  },
  {
    qout: ' “For last years words belong to last years language, and next years words await another voice.”',
    person: ' —T.S. Eliot',
  },
  {
    qout: '"If you are brave enough to say goodbye, life will reward you with a new hello.” ',
    person: '—Paulo Coehlo',
  },
  {
    qout: '“The beginning is the most important part of the work.” ',
    person: ' –Plato',
  },
];

btn.addEventListener('click', function () {
  let randomQout = Math.floor(Math.random() * qouts.length);
  console.log('btn clicked');

  qout.innerHTML = qouts[randomQout].qout;
  person.innerHTML = qouts[randomQout].person;
});

const iconEl = document.querySelector('.icon');

iconEl.addEventListener('click', function () {
  document.body.classList.toggle('Theme');

  if (document.body.classList.contains('Theme')) {
    iconEl.src = 'sun.png';
  } else {
    iconEl.src = 'moon.png';
  }
});
