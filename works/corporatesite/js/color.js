"use strict";

function changeColor(event){
    console.log(event);
    if( event.value == 0 ){
        event.style.color = '';
    }else{
        event.style.color = '#333';
    }
}


