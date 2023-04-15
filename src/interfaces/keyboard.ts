import './Piano'
import './keyboardKeys'

export interface keyboardKey {
     key: string;
     pianoKey: string;
     isSharp?: boolean;
}