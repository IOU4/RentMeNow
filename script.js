let menu_button = document.querySelector('div.menu-icon-div')
menu_button.addEventListener('click', function() {
  const menu = document.querySelector('.menu')
  if(menu.style.display === 'flex') {
    menu.style.display = 'none';
    menu_button.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128h42C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288h42C14.33 288 0 273.7 0 256zM416 448h42C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path></svg>'
  }
  else { 
    menu.style.display = 'flex';
    menu_button.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-xmark" class="svg-inline--fa fa-circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M336.1 175c-9.375-9.375-24.56-9.375-33.94 0L256 222.1L208.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03L175 303c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L256 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94l-47.03-47.03l47.03-47.03C346.3 199.6 346.3 184.4 336.1 175zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256S512 397.4 512 256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"></path></svg>'
  }
});
