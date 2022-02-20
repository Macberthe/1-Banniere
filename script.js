console.log('connecté !');

const btnSuccess =document.querySelector('.btn-success');
console.log('btsSuccess');

const cookies = document.querySelector('.cookies');
console.log('cookie');
btnSuccess.addEventListener('click',function(){
    console.log('bouton clické !');
    cookies.style.opacity = '0';
})