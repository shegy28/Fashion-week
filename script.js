function openNav() {
  document.getElementById('drop-down').style.display = 'block';
  document.getElementById('container').style.filter = 'blur(7px)';
}
openNav();

function closeNav() {
  document.getElementById('drop-down').style.display = 'none';
  document.getElementById('container').style.filter = 'blur(0px)';
}
closeNav();