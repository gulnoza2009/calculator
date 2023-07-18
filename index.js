const input = document.querySelector('.result');
const btns = document.querySelectorAll('button');
const clearChar = document.querySelector('.clearChar');

btns.forEach(e => {
    e.addEventListener('click',() => {
        const buttonVal = e.textContent;
        if(buttonVal == 'C')input.value = '';
        else if(buttonVal == '=')input.value = eval(input.value);
        else input.value += buttonVal;
    })
})

clearChar.addEventListener('click',()=>{
    input.value = input.value.replace(input.value[input.value.length-1],'');
})