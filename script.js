//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghostImg = document.querySelector(".ghost-image");

//declare variables for all of the buttons
let hideButton = document.querySelector(".hide-button");
let showButton = document.querySelector(".show-button");
let updateImg = document.querySelector(".update-img-button");
let messageButton = document.querySelector(".message-button");
let message = document.querySelector(".message");
let nameButton = document.querySelector(".name-button");



//create an onclick event for the Hide Me button
hideButton.onclick = (function (){ 
    ghostImg.style.opacity = "0";
});

//create an onclick event for the Show Me button
showButton.onclick = (function (){ 
     ghostImg.style.opacity = "1";
});


//create an onclick event for the Update Img button
updateImg.onclick = (function (){ 
  ghostImg.src = "https://media1.giphy.com/media/kSFWKgsdyB0SSdMxap/giphy.gif?cid=ecf05e474yc8b7lc8lfrtupurgrz4s06tk7hbn3dbw55gljf&rid=giphy.gif&ct=s"
});

//create an onclick event for the Send Message button
messageButton.onclick = (function (){ 
userInput = input.value
message.insertAdjacentHTML("beforeend", userInput);
});


//update the userInput variable by saving the value of the input



//use the insertAdjacentHTML method to append the userInput in a <p> tag


//create an onclick event for the Name Me button
nameButton.onclick = (function (){ 
      userInput = input.value  
  h1.innerHTML = userInput
});

//update the userInput variable by saving the value of the input


//use the innerHTML method to update the h1 tag
