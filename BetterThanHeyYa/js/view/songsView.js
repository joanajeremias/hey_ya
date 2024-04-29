
function render(memes) {

    var clap1 = document.getElementById("clap")

    if (clap1 != null){
        clap1.remove();
    }

    const container = document.getElementById("mainDiv");
    container.innerHTML = ""; // Remove previous elements
    container.innerHTML = `
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner" id="carr">
          <div class="carousel-item active" data-index="1">
            <img src="resources/song1.jpeg" class="d-block w-100" alt="...">
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
      </div>
      <div class="container-audio">
        <audio controls loop autoplay id="zeca">
          <source src="resources/cenas0.mp3" type="audio/ogg">
        </audio>
      </div>`;
    // Initialize carousel and audio functionality
    initCarouselAndAudio();
  }
    function initCarouselAndAudio() {
      var carousel = document.getElementById('carr');
      var audio = document.getElementById('zeca');
      // Set initial song
      audio.src = 'resources/cenas0.mp3';
      var prevButton = document.querySelector('.carousel-control-prev');
      var nextButton = document.querySelector('.carousel-control-next');
      prevButton.addEventListener('click', function() {
        // Get the index of the currently active carousel item
        var currentIndex = parseInt(document.querySelector('.carousel-item.active').dataset.index);
        // Calculate the previous index correctly
        var previousIndex = currentIndex - 2; // Subtract 2 for 0-based index and initial active item at index 1
        if (previousIndex < 1) previousIndex = 11; // Ensure index doesn't go below 1
        // Update the audio source based on the previous index
        audio.src = `resources/cenas${previousIndex}.mp3`;
        // Play the audio
        audio.play();
      });
      nextButton.addEventListener('click', function() {
        // Get the index of the currently active carousel item
        var currentIndex = parseInt(document.querySelector('.carousel-item.active').dataset.index);
        // Calculate the next index correctly
        var nextIndex = currentIndex; // Incrementing to play the next song
        if (nextIndex > 11) nextIndex = 0; // Ensure index doesn't go above 11
        // Update the audio source based on the next index
        audio.src = `resources/cenas${nextIndex}.mp3`;
        // Play the audio
        audio.play();
      });
      for (let i = 2; i < 13; i++) {
        let link = `<div class="carousel-item" data-index="${i}">
          <img src="resources/song${i}.jpeg" class="d-block w-100" alt="...">
        </div>`
        carousel.insertAdjacentHTML('beforeend', link);
      }
    }
  export default { render };