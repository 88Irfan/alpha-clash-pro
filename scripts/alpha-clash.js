// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
//     // show playground section
//     const playGroundSection=document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden');


// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;
    console.log(playerPressed);

    // get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabets');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('you press right letter');
        const currentScore=getTextElementValueById('current-score');
        const updateScore=currentScore+1;
        // set updated score
        setTextElementValueById('current-score',updateScore);



        // _______________________________ 
        // update score:
        // get the updated score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // // console.log(currentScore);
        // // incrised the updated score by 1
        // const newScore=currentScore+1;
        // // console.log(newScore);
        // // show the score
        // currentScoreElement.innerText=newScore;


        // start new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life')
        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById("current-life",updatedLife);

        if(updatedLife === 0){
            gameOver();
        }





        // _________________________________
        // step:1 get the current life number
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // // step:2 reduce the life count
        // const newLife=currentLife-1;
        // // step:3 display the updated life count
        // currentLifeElement.innerText=newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup',handleKeyboardKeyUpEvent)


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
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore=getTextElementValueById('current-score');
    // console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last selected alphabet highlite
    const currentAlphabet=getElementTextById('current-alphabets');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}