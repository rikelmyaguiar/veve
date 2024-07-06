/*abre o menu*/
 let botaomenu = document.getElementById('botaomenu')
 let menuitens = document.getElementById('menuitens')
 let botaosaida = document.getElementById('botaosaida')

 botaomenu.addEventListener('click', ()=>{
  menuitens.classList.add('abrirmenu')
 })

 botaosaida.addEventListener('click', ()=>{
  menuitens.classList.remove('abrirmenu')
 })
/*-----------------------------------------------------------------------*/
