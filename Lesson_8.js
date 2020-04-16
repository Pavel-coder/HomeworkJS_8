// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textarea = document.getElementById('text');
// let textValue = localStorage.getItem('text');
//
// if(textValue){
//     textarea.value = textValue;
// }
//
// textarea.oninput = () => {
//     let val = textarea.value;
//     localStorage.setItem('text', val);
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.


// let inputs = Object.values(document.forms.form);
// for (const input of inputs) {
//     prepareInput(input, input.name);
// }
//
// function prepareInput (input, key){
//     input.oninput = () => {
//         let value = input.value;
//         localStorage.setItem(key,value);
//     }
//     let getText = localStorage.getItem(key);
//     if (getText){
//         input.value = getText;
//     }
// }




// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


// let buttonSave = document.getElementById('buttonSave');
// let buttonLeft = document.getElementById('buttonLeft');
// let buttonRight = document.getElementById('buttonRight');
// let i = 0;
//
// buttonSave.onclick = () =>{
//     let textArea = document.getElementById('textarea');
//
//     let getFromLS = JSON.parse(localStorage.getItem('text'));
//     if(Array.isArray(getFromLS) && localStorage.getItem('text') != null){
//         getFromLS.push(textArea.value);
//         localStorage.setItem('text', JSON.stringify(getFromLS));
//     }
//     else {
//         let arr = [];
//         arr.push(textArea.value);
//         localStorage.setItem('text', JSON.stringify(arr));
//
//
//     }
// }
// buttonRight.onclick = () => {
//     let getFromRight = JSON.parse(localStorage.getItem('text'));
//     if ( getFromRight !== null && i < getFromRight.length - 1 ) {
//         i++;
//         let valueOfArr = getFromRight[i];
//         console.log(valueOfArr);
//     }
//
// };
//
//
// buttonLeft.onclick = () => {
//     let getFromRight = JSON.parse(localStorage.getItem('text'));
//     if (i > 0) {
//         --i;
//         let valueOfArr = getFromRight[i];
//
//         console.log(valueOfArr);
//     }
// };

    // let array = JSON.parse(localStorage.getItem('text'));
    // if(Array.isArray(array) && localStorage.getItem('text') != null){
    //     array.push(textArea.value);
    //     localStorage.setItem('text', JSON.stringify(array));
    // }
    // let settFromLS = localStorage.setItem('text',JSON.stringify(textArea.value));




// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//  - Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//
//
