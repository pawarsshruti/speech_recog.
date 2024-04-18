const text= document.querySelector('.text');

window.SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults =true;

 let p=document.createElement('p');

 recognition.addEventListener('result' , (e)=>
 {
     const text =Array.from(e.results)
     .map(result => result[0])
     .map(result => result.transcript)
     .join('');

     // console.log(text);
     p.innerText =text;
     document.body.appendChild(p);

     console.log(text);
 })

 recognition.start();
 console.log('recogntion started');
