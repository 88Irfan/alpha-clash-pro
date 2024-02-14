// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
//     // show playground section
//     const playGroundSection=document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden');


// }
function continueGame(){
    // generate random alphabet
    const alphabet=getARandomAlphabets();
    console.log('your alphabet',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement=document.getElementById('current-alphabets');
    currentAlphabetElement.innerText=alphabet;

    //set background color
    setBackgroudColorById(alphabet);


}
function play(){
    hideElementById('home-screen');
    showElementBYid('play-ground');
    continueGame();
}