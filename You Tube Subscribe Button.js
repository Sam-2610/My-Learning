function Subscribe(){
    const documentElement = document.querySelector('.input');
    if(documentElement.innerText ==='Subscribe'){
        documentElement.innerHTML = 'Subscribed';
        documentElement.classList.add('element');
    } else {
        documentElement.innerHTML ='Subscribe';
        documentElement.classList.remove('element');

    }
}
