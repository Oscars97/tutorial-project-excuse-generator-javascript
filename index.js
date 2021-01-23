window.addEventListener('load', changeTheExcuse);

function changeTheExcuse(){
    let random = Math.floor(Math.random() * (4 - 0) + 0);
    let who = ['The dog', 'My grandma', 'His turtle', 'My cat'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'they keys', 'the car', 'my head'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch'];
    
    let whoD = who[random];
    let actionD = action[random];
    let whatD = what[random];
    let whenD = when[random];

    let excuse = `${whoD} ${actionD} ${whatD} ${whenD}`;

    let paragraph = document.querySelector('#excuse');
    paragraph.innerHTML = excuse;

}
    



