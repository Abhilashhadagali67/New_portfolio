// FUnction to create Project card

function project_card(img_src, proj_title, proj_desc, proj_lang1,proj_lang2, proj_lang3,proj_lang4,github_repo,proj_host_link) {
  let html = `
    <div class="projects-content">
          <div class="project-box">
            <a href=${proj_host_link} style="text-decoration: none;">
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
                <a href=${github_repo} style="display: flex; text-decoration: none;">
                <img src="assets/globe.png" class="globe" />
                <div class="text">Github Repository</div>
              </a>
              </div>
        </div>
      </div>
    <!-- project content ends -->
  </div>`;
  document.querySelector(".projects-container").innerHTML =
    document.querySelector(".projects-container").innerHTML + html;
}

project_card("assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg","Real Estate UI Design","A responsive frontend for exploring and managing real estate properties seamlessly.","","React","MongoDB","Java","https://github.com/Abhilashhadagali67/real-estate-mern","https://real-estate-mern-hazel.vercel.app/");
// project_card("assets/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg","Doctor Appointment( 2024 )","create an Appointment Booking with MongoDB and real-time chat functionality with Socket.io","React", "https://github.com/Abhilashhadagali67/Doctor-Appointment-Booking-system");
// project_card("assets/nick-fewings-MlZnEM4LUwY-unsplash.jpg","car pooling( 2023 )","As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.","Java","Python","Django","React");
// project_card("assets/nick-fewings-MlZnEM4LUwY-unsplash.jpg","car pooling( 2023 )","As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.","Java","Python","Django","React");


