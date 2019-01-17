// Declare variables for responsive Menu
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var navItem = document.querySelectorAll('.nav-item a');

// Initial state of showMenu
var showMenu = false;

// responsive menu event function
menuBtn.addEventListener('click', function() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.remove('hide');
    menu.classList.add('show');
    // set Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menu.classList.add('hide');
    // set Menu state
    showMenu = false;
  }
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function() {
    if (showMenu) {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menu.classList.add('hide');
      // set Menu state
      showMenu = false;
    }
  });
}
