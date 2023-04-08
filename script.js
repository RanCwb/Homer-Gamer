const homer = document.querySelector('.homer')
const duff = document.querySelector('.duff')

const jump  = () => {

 homer.classList.add('jump')

 setTimeout(() => {

  homer.classList.remove('jump')

 }, 500)

}
document.addEventListener('keydown', jump)

const loop = setInterval(() => {

 const duffPosition = duff.offsetLeft;
 const positisonHomer = +window.getComputedStyle(homer).bottom.replace('px','');
 console.log(positisonHomer)




 if (duffPosition <= 120  && positisonHomer < 60 && duffPosition > 0 ) {
     
  duff.style.animation = 'none'
  duff.style.right =`${duffPosition}px`

 



  alert('Você esbarrou na rosquinha, tente novamente!')

 }


},10)