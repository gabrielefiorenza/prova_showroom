function myFunction() {
   
   const video = document.getElementById('myVideo');
   video.play();
   
}

function myFunction2() {
   const video2= document.getElementById("myVideo2");

   video2.style="z-index: 0;"
   video2.play();
}











function Eva() {
   //var image_x = document.getElementById('img');
   //image_x.parentNode.removeChild(image_x);
   
   const video = document.createElement('video');

// 👇️ Local file
// video.src = 'video.mp4';

// 👇️ Remote file
video.src =
  'render_buono2.mp4';


video.autoplay = true;
video.muted = false;
video.preload = "auto";
video.id = "myVideo";

const box = document.getElementById('box');

box.appendChild(video);

}
