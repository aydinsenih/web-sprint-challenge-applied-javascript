/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
createCarousel();
function createCarousel(){
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  leftButton.textContent = "<";
  rightButton.textContent = ">";
  img1.src = "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
  img2.src = "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
  img3.src = "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
  img4.src = "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  document.querySelector(".carousel-container").appendChild(carousel);

  img1.style.display = "block";
  let index = 1;

  leftButton.addEventListener("click", event => {
    if(index != 1){
      const currentImgRef = eval("img"+index);
      //fadeOut(currentImgRef);
      index--;
      const nextImgRef = eval("img"+index);
      fadeOut(currentImgRef, nextImgRef);
      //fadeIn(nextImgRef);
    }
  });

  rightButton.addEventListener("click", event => {
    if(index != 4){
      const currentImgRef = eval("img"+index);
      // fadeOut(currentImgRef);
      index++;
      const nextImgRef = eval("img"+index);
      fadeOut(currentImgRef, nextImgRef);
      //fadeIn(nextImgRef);
    }
  });
}

function fadeOut(img, nextImg) { 
  var op = 1;
  var id = setInterval(frame, 5);
  function frame() {
    if (op < 0) {
      clearInterval(id);
      img.style.opacity = 0 ;
      img.style.display = "none"
      if(typeof nextImg !== undefined){
        fadeIn(nextImg);
      }
    } else {
      op -= 0.01; 
      img.style.opacity = op ;  
    }
  }
}

function fadeIn(img, preImg) {
  var op = 0;
  img.style.display = "block"
  img.style.opacity = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (op > 1) {
      clearInterval(id);
      img.style.opacity = 1 ;
      if(typeof preImg !== undefined){
        fadeOut(preImg);
      }
    } else {
      op += 0.01; 
      img.style.opacity = op ;  
    }
  }
}
