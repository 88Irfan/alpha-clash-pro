function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden'); 
}
function showElementBYid(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden'); 

}
function setBackgroudColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');

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