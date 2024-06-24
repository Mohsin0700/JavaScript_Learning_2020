const totalScore: number = 100;

let userScore: number = 0;

let questionNum: number = 0;

let questionHeading = document.getElementById('qh')!;

const question = document.getElementById('q')!;

const a1 = document.getElementById('a1')! as HTMLButtonElement;
const a2 = document.getElementById('a2')! as HTMLButtonElement;
const a3 = document.getElementById('a3')! as HTMLButtonElement;
const a4 = document.getElementById('a4')! as HTMLButtonElement;


class Question {
    constructor(public q: string, public a: string, public b: string, public c: string, public d: string, public correct: string) {
    }
}

const question1 = new Question('HTML Stands For', 'High Text Mixing Language', 'Hyper Text Markup Language', 'Hyper Tune Marking Language', 'Heavy Times Meaning Language', 'Hyper Text Markup Language');

const question2 = new Question('What Is The Abbrevation Of WWW', 'Whole World Web', 'World Worst Web', 'World Wide Web', 'None of there', 'World Wide Web');

const question3 = new Question('Which Element Is Used For Line Break', `hr`, `br`, `break`, `broken`, `br`);

const question4 = new Question('What is the latest Version of HTML', 'XML', 'HTML5', 'XML5', 'XHTML5', 'HTML5');

const question5 = new Question('Which Element Is Used For Making Text Bold', `bold`, `strong`, `bd`, `br`, `b`);

question.innerHTML = question1.q;

a1.innerHTML = question1.a;
a2.innerHTML = question1.b;
a3.innerHTML = question1.c;
a4.innerHTML = question1.d;

const func = () => {
    questionNum++;
    if (questionNum === 1) {
        questionHeading.innerHTML = 'Question No.02';
        question.innerHTML = question2.q;
        a1.innerHTML = question2.a;
        a2.innerHTML = question2.b;
        a3.innerHTML = question2.c;
        a4.innerHTML = question2.d;
    } else if (questionNum === 2) {
        questionHeading.innerHTML = 'Question No.03';
        question.innerHTML = question3.q;
        a1.innerHTML = question3.a;
        a2.innerHTML = question3.b;
        a3.innerHTML = question3.c;
        a4.innerHTML = question3.d;
    } else if (questionNum === 3) {
        questionHeading.innerHTML = 'Question No.04';
        question.innerHTML = question4.q;
        a1.innerHTML = question4.a;
        a2.innerHTML = question4.b;
        a3.innerHTML = question4.c;
        a4.innerHTML = question4.d;
     } else if (questionNum === 4) {
        questionHeading.innerHTML = 'Question No.05';
        question.innerHTML = question5.q;
        a1.innerHTML = question5.a;
        a2.innerHTML = question5.b;
        a3.innerHTML = question5.c;
        a4.innerHTML = question5.d;
        const btn = document.getElementById('btn')!;
        btn?.classList.replace('btn-success', 'btn-danger');
        btn.innerHTML = 'Finish'
    }
}

const form = document.forms.demo;















// const ansKey:any = document.getElementsByName('answer');
// const ansKeys:any = [a1.innerHTML,a2.innerHTML,a3.innerHTML,a4.innerHTML];

// const check = ():void => {
//     console.log(ansKey.checked);
    
    
//     // for (let i = 0; i < ansKey.length; i++) {
//         // console.log(ansKey[i].value); 
//         // console.log(ansKey.checked.value);
        
        
//     // }
// }