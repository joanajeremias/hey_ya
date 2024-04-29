
function render(memes) {

  var clap1 = document.getElementById("clap")

  if (clap1 != null){
      clap1.remove();
  }

  const container = document.getElementById("mainDiv");
  container.innerHTML = ""; //removes the previous elements
  

container.innerHTML =   `
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner" id="carr">
    <div class="carousel-item active">
        <img src="${memes.memes[0].url}" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`

  //const carousel = document.getElementById("carr");

  var carousel = $('#carr');

  for (let i = 1; i < memes.memes.length; i++) {
    let link = `<div class="carousel-item">
        <img src="${memes.memes[i].url}" class="d-block w-100" alt="...">
      </div>`
    carousel.append(link);
  }
}


export default { render };
