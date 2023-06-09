import { keyboardKey } from "./interfaces/keyboard";
import '../src/styles/App.scss';
import './Piano';

const keyboardKeys: keyboardKey[] = [{
    key: 'a',
    pianoKey: 'c2',
}, {
     key: 's',
     pianoKey: 'd2',
}, {
    key: 'd',
    pianoKey: 'e2',
}, {
    key: 'f',
    pianoKey: 'f2',
}, {
    key: 'g',
    pianoKey: 'g2',

}, {
    key: 'h',
    pianoKey: 'a2',
}, {
    key: 'j',
    pianoKey: 'b2',
}, {
   key: 'k',
   pianoKey: 'c3',
}, {
   key: 'l',
   pianoKey: 'd3',
}, {
   key: 'ç',
   pianoKey: 'e3',

}, {
   key: ']',
   pianoKey: 'f3',
}, {
    key: 'q',
    pianoKey: 'g3',
 }, {
    key: 'w',
    pianoKey: 'a3',
 }, {
    key: 'e',
    pianoKey: 'b3',
 
 }, {
    key: 'r',
    pianoKey: 'c4',

}, {
    key: 't',
    pianoKey: 'd4',
 }, {
     key: 'y',
     pianoKey: 'e4',
  }, {
     key: 'u',
     pianoKey: 'f4',
  }, {
     key: 'i',
     pianoKey: 'g4',
  
  }, {
     key: 'o',
     pianoKey: 'a4',
}, {
    key: 'p',
    pianoKey: 'b4',
 },{
    key: '[',
    pianoKey:'c2',
    isSharp: true,
 },{
    key: '1',
    pianoKey:'d2',
    isSharp: true,
 }, {
    key: '2',
    pianoKey:'f2',
    isSharp: true, 
 }, {
    key: '3',
    pianoKey:'g2',
    isSharp: true,
 }, {
    key: '4',
    pianoKey:'a2',
    isSharp: true,
 }, {
    key: '5',
    pianoKey:'c3',
    isSharp: true,
 }, {
    key: '6',
    pianoKey:'d3',
    isSharp: true,
 }, {
    key: '7',
    pianoKey:'f3',
    isSharp: true,
 }, {
    key: '8',
    pianoKey:'g3',
    isSharp: true,
 }, {

    key: '9',
    pianoKey:'a3',
    isSharp: true,
 }, {

    key: '0',
    pianoKey:'c4',
    isSharp: true,
 }, {


    key: 'z',
    pianoKey:'d4',
    isSharp: true,
 }, {


    key: 'x',
    pianoKey:'f4',
    isSharp: true,
 }, {
    key: 'c',
    pianoKey:'g4',
    isSharp: true,
 }, {
    key: 'v',
    pianoKey:'a4',
    isSharp: true,
 }
 ];

export default keyboardKeys;