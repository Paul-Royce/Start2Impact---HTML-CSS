"use strict";
const userNameOne = document.querySelector('.user-name');
const userNameTwo = document.querySelector('.username');
    
let askUserName= prompt("Hello here is Paul. What's your name?", 'name');
userNameOne.textContent = askUserName;
userNameTwo.textContent = askUserName;
