import './Piano'
import './keyboardKeys'
import '../src/styles/App.scss';

export interface keyboardKey {
     key: string;
     pianoKey: string;
     isSharp?: boolean;
}