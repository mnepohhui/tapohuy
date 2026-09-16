const crsrcrcont = document.querySelector('.cursorcont');
const crsrcr = document.querySelector('.cursorcircle');

const pic = document.querySelector('.gridpic');
const starArea1 = document.querySelector('.grid_item1');

const str = document.querySelector('.gridstar');
const starArea2 = document.querySelector('.grid_item2');


function moveCircle(e) {
  const x = e.clientX;
  const y = e.clientY;

  crsrcrcont.style.transform = `translate(${x}px, ${y}px)`;

  const rect1 = starArea1.getBoundingClientRect();
  pic.style.transform =
    `translate(${x - rect1.left - 45}px, ${y - rect1.top - 70}px)`;

  const rect2 = starArea2.getBoundingClientRect();
  str.style.transform =
    `translate(${x - rect2.left - 150}px, ${y - rect2.top - 150}px)`;

}

document.onmousemove = moveCircle;





const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');

line1.addEventListener('mouseenter', () => {
  crsrcr.classList.add('line1cursor');
  crsrcr.innerHTML = '<span style="color: white; font-size:30px">1</span>'
});

line1.addEventListener('mouseleave', () => {
  crsrcr.classList.remove('line1cursor');
  crsrcr.innerHTML = '';
});



line2.addEventListener('mouseenter', () => {
  crsrcr.classList.add('line2cursor');
  crsrcr.innerHTML = '<span style="color: white; font-size:30px">2</span>'
});

line2.addEventListener('mouseleave', () => {
  crsrcr.classList.remove('line2cursor');
  crsrcr.innerHTML = '';
});


