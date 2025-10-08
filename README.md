hi!
here is my documentation!

sources
I followed a lot of Professor Moore's starter code from lab 4 then changed it to fit the launch page
https://www.w3schools.com/howto/howto_css_circles.asp to create the circles and game pieces copied the code then edited to fit the game

ai useage
asking chatgpt for debugging like why the css wasn't working and it was there wasn't # or . in a few spots 
used to debug #hero h1 #play h3 
how to move the circles to the right spots 
position for the board relative and circles absolute
how to program multiple dots at once lines 21-23 were copied from chatgpt and edited to fit the code
gameboard js to set up event listener

other sources used 
https://loading.io/animation/text/
for win animation

https://gudh.github.io/ihover/dist/index.html
chip animations
<!-- Top to bottom-->
<div class="row">
  <div class="col-sm-6">
 
    <!-- normal -->
    <div class="ih-item circle effect8 top_to_bottom"><a href="#">
        <div class="img-container">
          <div class="img"><img src="images/assets/1.jpg" alt="img"></div>
        </div>
        <div class="info-container">
          <div class="info">
            <h3>Heading here</h3>
            <p>Description goes here</p>
          </div>
        </div></a></div>
    <!-- end normal -->
 
  </div>
  <div class="col-sm-6">
 
    <!-- colored -->
    <div class="ih-item circle colored effect8 top_to_bottom"><a href="#">
        <div class="img-container">
          <div class="img"><img src="images/assets/2.jpg" alt="img"></div>
        </div>
        <div class="info-container">
          <div class="info">
            <h3>Heading here</h3>
            <p>Description goes here</p>
          </div>
        </div></a></div>
    <!-- end colored -->
 
  </div>
</div>
<!-- end Top to bottom-->

claude answer
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('click', function(e) {
        const column = e.target.dataset.column;
        const row = e.target.dataset.row;
        
        console.log(`Clicked: Row ${row}, Column ${column}`);
    });
});