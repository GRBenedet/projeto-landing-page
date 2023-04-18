function showMenu(){
   let showmenu = document.querySelector('.menu-celular')
   let cabeca = document.querySelector('.cabecote')

   if(showmenu.classList.contains('show')){
      showmenu.classList.remove('show')
   }  else {
      showmenu.classList.add('show')
   }

   if(cabeca.classList.contains('open')){
      cabeca.classList.remove('open')
   }  else {
      cabeca.classList.add('open')
   }
}

