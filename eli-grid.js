let menubtn = document.querySelector('header');
if(menubtn){
let nav = document.querySelector('header nav');
menubtn.addEventListener('click', function(e) {
  if(e.target.nodeName == 'HEADER')
  {
    nav.classList.add('active');
  }

});

nav.addEventListener('click', function(e) {
  //console.log(e.target.nodeName);
  if(e.target.nodeName == 'NAV')
  {
    nav.classList.remove('active');
  }
});
}
