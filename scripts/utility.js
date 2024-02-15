function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden'); 
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden'); 

}
function setBackgroudColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementText=element.innerText;
    const value=parseInt(elementText);
    return value;
}

function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;
}
function setTextElementValueById(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}

function getARandomAlphabets(){
    // get or create an alphabets array
    const alphabetsString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetsString.split('');
    // console.log(alphabets);
    // get a random index between 0-25
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    return alphabet;
}