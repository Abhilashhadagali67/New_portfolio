// FUnction to create Project card

function project_card(img_src, proj_title, proj_desc, proj_lang1,proj_lang2, proj_lang3,proj_lang4) {
  let html = `
    <div class="projects-content">
      <div class="project-box">
        <div class="box-project-image">
          <div class="project-container-image">
            <img src=${img_src} alt="" />
          </div>
        </div>
        <!-- Image ends -->
        <div class="box-texts">
          <h4>${proj_title}</h4>
          <p>
          ${proj_desc}
          </p>
          <ul>
            <li>${proj_lang1}</li>
            <li>${proj_lang2}</li>
            <li>${proj_lang3}</li>
            <li>${proj_lang4}</li>
          </ul>
          <div class="browser-button">
            <img src="assets/globe.png" class="globe">
            <div class="text">Github Repository</div>
          </div>
        </div>
      </div>
    <!-- project content ends -->
  </div>`;
  document.querySelector(".projects-container").innerHTML =
    document.querySelector(".projects-container").innerHTML + html;
}

project_card("assets/nick-fewings-MlZnEM4LUwY-unsplash.jpg","car pooling( 2023 )","The car pooling system is a tool which can be used in our day-to-day life, especially in large metropolitian cities.","React","Tailwind","MongoDB","Java");
// project_card("assets/nick-fewings-MlZnEM4LUwY-unsplash.jpg","car pooling( 2023 )","As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.","Java","Python","Django","React");
// project_card("assets/nick-fewings-MlZnEM4LUwY-unsplash.jpg","car pooling( 2023 )","As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.","Java","Python","Django","React");


function toggleNav() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
  var menuBtn = document.querySelector(".menu-btn");
  menuBtn.classList.toggle("open");
}