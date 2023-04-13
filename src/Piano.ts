import './App.scss';

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
}
}
pianoKeysEl.forEach((element: Element) => {
    
    element.addEventListener('click', (event) => {

      const currentKey =  event.target as HTMLElement;

      playPianoKey(currentKey);
      
      currentKey.classList.add('pressed');
    });

})