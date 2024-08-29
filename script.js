// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.slice(0, -1);
//             input.value = string;
//         }
//         else{string += e.target.innerHTML;
//             input.value = string;}
        
//     })
// })


// const inputBox = document.getElementById('inputbox');
// const buttons = document.querySelectorAll('button');


// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const buttonText = button.innerText;
//     if (buttonText === 'AC') {
//       inputBox.value = ''; 
//     } else if (buttonText === 'DEL') {
//       inputBox.value = inputBox.value.slice(0, -1);
//     } else if (buttonText === '=') {
//       try {
//         inputBox.value = eval(inputBox.value);
//       } catch (error) {
//         inputBox.value = 'Error';
//       }
//     } else {
//       inputBox.value += buttonText;
//     }
//   });
// });


const inputvalue = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
  button.addEventListener('click', () => {
    const buttontext = button.innerText;
    if(buttontext == 'AC'){
      inputvalue.value = '';
    } else if(buttontext == 'DEL'){
      inputvalue.value = inputvalue.value.slice(0, -1);
    } else if(buttontext == '='){
      inputvalue.value = eval(inputvalue.value);
    } else{
      inputvalue.value += buttontext;
    }
  })
})




