let petBody = document.getElementsByClassName("petBody")[0]

// petBody_emotions:
let petBody_inLove = document.querySelector(".petBody_inLove")
let petBody_hungry = document.querySelector(".petBody_hungry")

let petBody_fireworks = document.querySelector(".petBody_fireworks")
let petBody_mad = document.querySelector(".petBody_mad")
let petBody_moody = document.querySelector(".petBody_moody")
let petBody_sad = document.querySelector(".petBody_sad")
let petBody_happy = document.querySelector(".petBody_happy")
let petBody_bored = document.querySelector(".petBody_bored")
let petBody_sick = document.querySelector(".petBody_sick")
let petBody_scared = document.querySelector(".petBody_scared")
let petBody_went =document.querySelector(".petBody_went")

// pet emotions:
let inLove
let hungry 
let fireworks 
let mad 
let moody 
let sad 
let happy 
let bored 
let sick 
let scared 

// pet interactive hidden elements 
let petPoop = document.querySelector(".petPoop")
let petGhosts =  document.querySelector(".ghosts")
let ghost1 = document.querySelector(".ghost1")
let ghost2 = document.querySelector(".ghost2")
let ghost3 = document.querySelector(".ghost3")
let ghost4 = document.querySelector(".ghost4")
let tvOff = document.querySelector(".tvOff")
let tvOn = document.querySelector(".tvOn")
let cloud = document.querySelector(".cloud")
let backgroundDay = document.querySelector(".homeDay")
let backgroundNight = document.querySelector(".homeNight")
let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
let sickDialogue = document.querySelector(".sickDialogue")
let sickDialogueYes = document.querySelector(".buttonYes")
let sickDialogueNo = document.querySelector(".buttonNo")

// display on screen pet emotions 
function deleteSituation(){//called on function hideDuplicateCat
    console.log("delete situation called")
    petBody_inLove.style.display ="none"
    petBody_hungry.style.display ="none"
    petBody_fireworks.style.display ="none"
    petBody_mad.style.display ="none"
    petBody_moody.style.display ="none"
    petBody_sad.style.display ="none"
    petBody_happy.style.display ="none"
    petBody_bored.style.display ="none"
    petBody_sick.style.display ="none"
    petBody_scared.style.display ="none"
}
// checks all the variables 
function general(){ 
    food()
    sleep()
    poop()
    isSick()
    isScared()
    //isBoredSad()
    //inLoveHappy()
    badEmotionsCleared()
}
//sets the pet_body
function situation(){ // called on the food, moody, poop, cleanPoop, isSick, onclick of petBody when pet is sick, isScared, scaredGoes, isBoredSad functs 
    console.log("situation called")
    
    if(hungry == true){
        petBody_hungry.style.display ="block"
        hideDuplicateCats(petBody_hungry)
    }else{
        petBody_hungry.style.display ="none"
    }

    if(inLove == true){
        petBody_inLove.style.display ="block"
        hideDuplicateCats(petBody_inLove)
    }else{
        petBody_inLove.style.display ="none"
    }

    if(fireworks == true){
        petBody_fireworks.style.display ="block"
        hideDuplicateCats(petBody_fireworks)
    }
    else{
        petBody_fireworks.style.display ="none"
    }

    if(mad == true){
        petBody_mad.style.display ="block"
        hideDuplicateCats(petBody_mad)
    }else{
        petBody_mad.style.display ="none"
    }

    if(moody == true){
        petBody_moody.style.display ="block"
        hideDuplicateCats(petBody_moody)
    }else{
        petBody_moody.style.display ="none"
    }

    if(sad == true){
        petBody_sad.style.display ="block"
        hideDuplicateCats(petBody_sad)
    }else{
        petBody_sad.style.display ="none"
    }

    if(happy == true){
        petBody_happy.style.display ="block"
        hideDuplicateCats(petBody_happy)
    }else{
        petBody_happy.style.display ="none"
    }

    if(bored == true){
        petBody_bored.style.display ="block"
        hideDuplicateCats(petBody_bored)
    }else{
        petBody_bored.style.display ="none"
    }

    if(sick == true){
        petBody_sick.style.display ="block"
        hideDuplicateCats(petBody_sick)
    }else{
        petBody_sick.style.display ="none"
    }

    if(scared == true){
        petBody_scared.style.display ="block"
        hideDuplicateCats(petBody_scared)
    }else{
        petBody_scared.style.display ="none"
    }
    
    
    /* there's also a problem with this, the text appears when it shouldn't  (the cat is there)
    if((inLove ==false || inLove=== undefined) && (hungry ==false || hungry === undefined) && (fireworks==false || fireworks === undefined)  && (mad==false || mad=== undefined) && (moody==false || moody=== undefined) && (sad== false ||sad=== undefined) && (happy==false || happy=== undefined) && (bored==false ||bored=== undefined) && (sick==false || sick=== undefined) && (scared==false || scared===undefined)) {
        petBody_went.style.display ="block"
    }
    */
}

/*
the problem with the cat images is that there can be more than 1 img that has
display:block based on the conditions. 
If this happens then 2 cats will be visible, the best solution that i've found 
is to set on each display: block of the cat emotions the display none of the others
*/
function hideDuplicateCats(show_this_cat){
    deleteSituation()
    show_this_cat.style.display ="block"
}


/* ℹ️ if all bad emotions are false badEmotionsCleared will be called 
this function is called in giveFood instead of in food and in nightMode instead of sleep. If not when the program starts it checks the general function and from that one (because of how it's written)*/
function badEmotionsCleared(){ // called on scaredGoes, isSick, cleanPoop and general 
    if((moody==false || moody==undefined)&&(hungry==false || hungry==undefined)&&(mad==false || mad==undefined)&&(sick==false || sick==undefined)&&(scared==false || scared==undefined)){
        console.log("no bad emotions")
        isBoredSad()
        inLoveHappy()
    }
}


// define pet emotions 
const birthday = new Date('14/12/2022');
const today = new Date();
let daysAlive =  6//Math.ceil((Math.abs(today - birthday)) / (1000 * 60 * 60 * 24)); 
console.log(daysAlive + " days");

//i think this, as it's defined every time can work without the local storage
//localStorage.setItem("daysAlive", JSON.stringify(daysAlive))

// eat var
let eatCount = localStorage.getItem("eatCount");
let a = eatCount == undefined ? 0 : eatCount;
console.log(eatCount, "loaded eatCount")
//sleep var 
let sleepCount = localStorage.getItem("sleepCount");
let b = sleepCount == undefined ? 0 : sleepCount;
console.log(sleepCount, "loaded sleepCount")


// BASED ON TIME 
// 🥦 food related 
function food(){ // called on general funct & on giveFood funct 
    console.log(" food called")
    //console.log(eatCount, "eatcount recived at food ")
    //daysAlive= JSON.parse(localStorage.getItem("daysAlive"))
    eatCount= JSON.parse(localStorage.getItem("eatCount"))
    //console.log(eatCount, "eatcount recived used in food ")
   if(daysAlive>eatCount){  
        hungry = true
   } else{
        hungry = false
   }
   situation(hungry) //i call the situation function and send hungry value to it 
}
function giveFood(){ // called on click of food plate
    console.log(" give food called")
    eatCount= a++
    localStorage.setItem("eatCount", JSON.stringify(eatCount) ) // here it is still a number but it becomes string on the extraction 
    console.log(eatCount, "eatcount from give food ")
    food() //i call the food function
    badEmotionsCleared()
}

// 🌗 sleep related 
function sleep(){ // called on general funct 
    console.log(" sleep called")
    
    //daysAlive= JSON.parse(localStorage.getItem("daysAlive"))
    sleepCount= JSON.parse(localStorage.getItem("sleepCount"))

    if(daysAlive > sleepCount){   
        moody = true
   } else{
        moody = false
   }

   situation(moody) //i call the situation function and send moody value to it 
}
/*function giveSleep(){ // called on click of the light
    console.log("give sleep called")
    b++
    localStorage.setItem("sleepCount", JSON.stringify(b)) // here it is still a number but it becomes string on the extraction 
    sleep() //i call the sleep function

    // nightMode() i call the function to change backgrond between day/night
}
*/
// RANDOM EVENTS 
//💩 poop
let randomNumberPoop = Math.floor(Math.random()* 2) // random number from 0 to 1
function poop(){ // called on the general funct
    if(randomNumberPoop==0){
        petPoop.style.display = "block"
        mad = true 
    }else{
        mad = false
    }
    situation(mad)
}
function cleanPoop(){ //called on click of the poop
    petPoop.style.display = "none"
    mad = false
    situation(mad)
    badEmotionsCleared()
}

//🤢 sick 
let randomNumberSick = Math.floor(Math.random()* 2) // random number from 0 to 1
function isSick(){// called on the general funct
    if(randomNumberSick==0){
        sick = true;
    }else{
        sick = false
    }
    situation(sick)
}
petBody.onclick = function(){ 
    if(sick==true){
        sickDialogue.style.display = "block"
        sickDialogueYes.onclick = function(){
            console.log("give hot chocolate")
            sick = false;
            sickDialogue.style.display = "none"
            situation(sick)
            badEmotionsCleared()
        }
        sickDialogueNo.onclick=function(){
            sickDialogue.style.display = "none"
        }
    }
}

// 👻 scared
let randomNumberScared = Math.floor(Math.random()* 2) // random number from 0 to 1
function isScared(){// called on the general funct
    if(randomNumberScared == 0){
        petGhosts.style.display ="block"
        scared = true
    }else{
        scared = false
    }
    situation (scared)
}

let g1Gone, g2Gone, g3Gone, g4Gone; 

ghost1.onclick = function (){
    ghost1.style.display ="none"
    g1Gone = true
    scaredGoes()
}
ghost2.onclick = function (){
    ghost2.style.display ="none"
    g2Gone = true
    scaredGoes()
}
ghost3.onclick = function (){
    ghost3.style.display ="none"
    g3Gone = true
    scaredGoes()
}
ghost4.onclick = function (){
    ghost4.style.display ="none"
    g4Gone = true
    scaredGoes()
}
function scaredGoes(){ // called on each ghost onclick
    if(g1Gone == true && g2Gone == true && g3Gone == true && g4Gone == true){
        scared = false
        petGhosts.style.display="none"
        situation(scared)
        badEmotionsCleared()
    }
}
 
// bored
/* in functions isBoredSad and  inLoveHappy im calling the random number inside so every time the function will be called the random number will be generated and the program will be more interactive*/

function isBoredSad(){ //called in the if above
    let randomNumberBoredSad =2 //Math.floor(Math.random()* 3) // random number from 0 to 2
    console.log("isBoredSad called ")
    if((moody==false || moody==undefined)&&(hungry==false || hungry==undefined)&&(mad==false || mad==undefined)&&(sick==false || sick==undefined)&&(scared==false || scared==undefined) && randomNumberBoredSad== 1){
        bored = true
    }else{
        bored=false
    }
    if((moody==false || moody==undefined)&&(hungry==false || hungry==undefined)&&(mad==false || mad==undefined)&&(sick==false || sick==undefined)&&(scared==false || scared==undefined) && randomNumberBoredSad== 2){
        sad = true
    }else{
        sad=false
    }
    situation (bored, sad)
}
// happy or inLove 
function inLoveHappy(){// called on general funct and in watchTv
    let randomNumberLoveHappy =  Math.floor(Math.random()* 2) // random number from 0 to 1
    if((moody==false || moody==undefined)&&(hungry==false || hungry==undefined)&&(mad==false || mad==undefined)&&(sick==false || sick==undefined)&&(scared==false || scared==undefined) &&(bored==false || bored==undefined)&&(sad==false || sad==undefined)){
        if(randomNumberLoveHappy == 0){
            inLove=true
        }else{
            inLove=false
        }
        if(randomNumberLoveHappy == 1){
            happy=true
        }else{
            happy=false
        }
    }
    situation (inLove, happy)
}



// CHANGE ELEMENTS ON CLICK 
// TV
let tvClick = 1
function watchTv(){ //called on click of tv
    tvClick++
    if ((tvClick%2)==0){
        tvOff.style.display ="none"
        tvOn.style.display ="block"
        bored = false
        sad = false
        inLoveHappy()
    }else{
        tvOff.style.display ="block"
        tvOn.style.display ="none"
    }
    
    situation (bored)
}
// DAY AND NIGHT
let isNight = 0 //false
function nightMode(){ // called on the giveSleep() function 
    isNight++
    if((isNight%2)== 0 ){ //when it's day 
        backgroundDay.style.display ="block"
        backgroundNight.style.display ="none"
        sun.style.display ="block"
        moon.style.display ="none"
        cloud.style.display ="block"
    }else{//night 
        backgroundDay.style.display ="none"
        backgroundNight.style.display ="block"
        sun.style.display ="none"
        moon.style.display ="block"
        cloud.style.display ="none"
        // this is to count the sleep 
        b++
        localStorage.setItem("sleepCount", JSON.stringify(b)) // here it is still a number but it becomes string on the extraction 
        sleep()
        badEmotionsCleared()
    }
}
/* SET RANDOM POSITION OF ELEMENTS */
/*GHOSTS  */
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function setGhosts(){
    ghost1.style.left= randomIntFromInterval(100, 215) +'px';
    ghost1.style.top= randomIntFromInterval(280, 670) +'px';

    ghost2.style.left= randomIntFromInterval(280, 350) +'px';
    ghost2.style.top= randomIntFromInterval(215, 350) +'px';

    ghost3.style.left= randomIntFromInterval(415, 635) +'px';
    ghost3.style.top= randomIntFromInterval(280, 445) +'px';

    ghost4.style.left= randomIntFromInterval(400, 635) +'px';
    ghost4.style.top= randomIntFromInterval(535, 670) +'px';

    cloud.style.left= randomIntFromInterval(55, 515) +'px';
    cloud.style.top= randomIntFromInterval(15, 300) +'px';
}



window.addEventListener("load", general(), setGhosts())
//document.getElementsByTagName('body')[0].onclick = general();
//window.addEventListener("click", general())
//❌ localStorage.removeItem("name");  function to delete the var in local storage