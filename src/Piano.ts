import '../src/styles/App.scss';
import keyboardKeys from './keyboardKeys';
import { playAudio } from './utils';
import './App';


const pianoKeysEl = [...document.querySelectorAll('.piano .keys-unit .piano-key')] as HTMLElement[];

function playPianoKey(keyElement: HTMLElement){

  if (keyElement) {

    const piano = keyElement.closest('.piano');
 
    piano?.querySelectorAll('.piano-key').forEach((element) => {

      if (element.classList.contains('pressed')) {

        element.classList.remove('pressed')
      }

      const blackKey = element.querySelector('.black');
        if (blackKey?.classList.contains('pressed')) {
          blackKey.classList.remove('pressed');
        }
    });

  keyElement.classList.add('pressed');

let keyName;

  if (keyElement.classList.contains('black')) {

     const container = keyElement.closest('.piano-key') as HTMLElement;

     keyName = `${container.dataset.key}-sharp.mp3`;

  } else {
   keyName = `${keyElement.dataset.key}.mp3`;

  }
  if (keyName) {
    playAudio(keyName);
  } else {
    console.error('Nota não encontrada.');
  }


  playAudio(keyName);
}
}


pianoKeysEl.forEach((element: Element) => {
    
    element.addEventListener('click', (event) => {

      const currentKey =  event.target as HTMLElement;

      playPianoKey(currentKey);
      

    });

})

document.addEventListener('keydown', (event: KeyboardEvent) => {

  const pressedKey = event.key;
  const pianoKey = keyboardKeys.find((item) => item.key === pressedKey);

  if (pianoKey) {
    const element = pianoKeysEl.find((el) => el.dataset.key === pianoKey.pianoKey);

    if (element) {

      if (pianoKey.isSharp) {

        const blackKey = element.querySelector('.black') as HTMLElement;

        playPianoKey(blackKey);

      } else {
        playPianoKey(element)
      }

    playPianoKey(element);
    }

  } else {
    console.error('Nota não encontrada');
  }

});