let CartQuantity = 0;

function ShowCartQuantity(){
    console.log('CartQuantity =',CartQuantity);
}

function AddQuantity(){
    CartQuantity++;
    console.log('CartQuantity =',CartQuantity);
}

function Add(Amount){
    CartQuantity = CartQuantity + Amount;
    console.log('CartQuantity =',CartQuantity);
}

function Reset(){
    CartQuantity = 0;
    console.log('CartQuantity =',CartQuantity);
}
