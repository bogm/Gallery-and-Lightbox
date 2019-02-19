
let image = document.getElementById('slideImg');
const button = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll('.column-modal img');
const activeImg = document.getElementById('activeImage');
const modal = document.querySelectorAll('.column-modal');
const modalContainer = document.querySelector('.modal-active')
const imgContainer = document.querySelector('.img-container')


const imgArray  = Array.prototype.slice.call(imgs);
let imgArraySrc = imgArray.map(image =>{ return image.src})

let i = activeImg.src 


imgs.forEach(img => img.addEventListener('click', lightBox))

document.querySelector('.close').addEventListener('click', closeModal);
document.querySelector('.left').addEventListener('click', goBw);
document.querySelector('.right').addEventListener('click', goFw);

function lightBox(e) {
  let currentImg = e.target.src;
  imgs.forEach(img => img.style.display = 'none');
  activeImg.src = currentImg;
  activeImg.classList.add('mactive');
  modalContainer.style.display="flex";
  document.querySelector('.wrapper').style.display = "none";

 
}

function goFw(e){ 

i = imgArraySrc.indexOf(activeImg.src);
if(i === imgArraySrc.length - 1){
  i = 0;
} else {
 i++;
}

activeImg.src = imgArraySrc[i]; 

//  console.log(imgArraySrc[i]);
 console.log(i);
}

function goBw(){
  i = imgArraySrc.indexOf(activeImg.src);
  if(i === 0){
    i = imgArraySrc.length - 1;
  } else {
   i--;
  }

activeImg.src = imgArraySrc[i]; 

 console.log(i);
 //console.log(imgArraySrc.length)
}


function closeModal(e){
  modalContainer.style.display="none";
  document.querySelector('.wrapper').style.display = "block";
  imgs.forEach(img => img.style.display = 'block');
  imgs.forEach(img => img.classList.remove('mactive'));
  
}
