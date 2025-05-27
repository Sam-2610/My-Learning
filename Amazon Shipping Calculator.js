function Calculator(){
    const inputElement = document.querySelector('.amount');
    let cost = Number(inputElement.value);
    if(cost < 40){
        cost=cost+10;
    }
    document.querySelector('.input').innerHTML = `$${cost}`;

}
