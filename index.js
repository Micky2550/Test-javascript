let AnswerCircle = document.getElementById('AnswerCircle');
let message = document.getElementById('message');

function ShowMessage() {
    message.innerHTML = 'ควยกูไม่บอกคำตอบ'
}

AnswerCircle.addEventListener('click', ShowMessage);

function GetAreaCircle(diameter) {
    let radius = diameter / 2;
    let pie = 3.14;
    let AreaCircle = pie * radius ** 2;
    return AreaCircle;
}

let area1 = GetAreaCircle(15);
let area2 = GetAreaCircle(20);
let area3 = GetAreaCircle(30);
console.log('Area Circle 1 = ' + area1 + ' , Area Circle 2 = ' + area2 + ' , Area Circle 2 =' + area3);
