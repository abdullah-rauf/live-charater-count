// const textarea = document.querySelector('textarea');
// const counter = document.querySelector('.counter');


// textarea.addEventListener('onkeyup', function(){

//     const textLength = textarea.value.length 
//     console.log(textLength);
    



// })

const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function countingCharacters(){
    const textLength = textarea.value.length

    // console.log(textarea);

    counter.innerText = `${textLength}`
    
}

textarea.addEventListener('input', countingCharacters)