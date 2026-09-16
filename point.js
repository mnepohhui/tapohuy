const pointcont = document.querySelector('.pointcont');

document.addEventListener('mousemove', (event) => {
  pointcont.style.left = event.clientX + 'px';
  pointcont.style.top = event.clientY + 'px';
});

document.addEventListener('mousemove', (event) => {
  document.querySelector('.vertical_line').style.left = event.clientX + 'px';
  document.querySelector('.vertical_line').style.top = event.clientY + 'px';
});

document.addEventListener('mousemove', (event) => {
  document.querySelector('.horizontal_line').style.left = event.clientX + 'px';
  document.querySelector('.horizontal_line').style.top = event.clientY + 'px';
});
