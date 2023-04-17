import '../src/styles/App.scss';
import './Piano';
import './App';
import './keyboardKeys';


export function playAudio(keyName: string):void {

    try {

       const audio  = new Audio(`assets/audio/${keyName}`);

       audio.currentTime  = 1;
       audio.play();

    } catch (e) {
        console.error('Problema ocorrido.');
    }
}