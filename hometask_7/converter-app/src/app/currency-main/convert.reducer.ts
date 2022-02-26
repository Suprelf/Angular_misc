import { Action, createReducer, on } from '@ngrx/store';
import { convert } from './convert.actions';

export const initialState = 0;
let convert_result = 0;

function setToScope(this: any){
    console.log(this.response['result'])
    convert_result = this.response['result'];
}

function Convert() {
    
    var Action_from_curr =  (<HTMLInputElement>document.getElementById("fromC")).value ;
    var Action_to_curr =    (<HTMLInputElement>document.getElementById("toC")).value;
    var Action_amount =     (<HTMLInputElement>document.getElementById("fromA")).value;
    
    var requestURL = `https://api.exchangerate.host/convert?from=${Action_from_curr}&to=${Action_to_curr}&amount=${Action_amount}`;
    
    var request = new XMLHttpRequest();
    request.addEventListener('load', setToScope)
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    return convert_result    
}

const _convertReducer = createReducer(
    initialState,   
    on(convert, (state) => Convert()),
);

export function convertReducer(state: number | undefined, action: Action) {
    console.log(state);
    return _convertReducer(state, action);
}