function showHome() {

  var clap1 = document.getElementById("clap")

  if (clap1 != null){
      clap1.remove();
  }

  const body = $('body')

  const clap = '<center><img src="resources/clap.gif" id="clap"></center> ';

  body.append(clap);



  const container = document.getElementById("mainDiv");
  container.innerHTML = ""; //removes the previous elements
container.innerHTML =   `<div class="container">
<div class="row justify-content-center">
    <div class="col-md-8">
        <h1 class="text-center">HOW "HEY YA!" CHANGED THE WORLD</h1>
        <br>
        <h2 class="text-center">Let's unveil how 'Hey Ya!' and its annoying repetition in the media drove the world into madness in this decade filled with wars, hurricanes and radical haircuts!</h2>
        
        
    </div>
</div>
</div>`

const page = document.getElementById("page");
page.style="align-items: flex-start;";

//container.style="width:100%;";

}



export default { showHome };
