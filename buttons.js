const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => {
    alert('Pirilinpimpim');
    console.log(e)
})