document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  // Content for each section
  const aboutContent = `
    <section class="about-section">
      <h2>About Me</h2>
      <hr class="solid" />
      <div class="content-details">
        <p>
          Hi! I'm Andrew Paolella. I'm a highly motivated Information Technology graduate with a strong foundation in Python, Java, web design, system operations, information security, and computer hardware. 
          My goal is to secure a internship to apply my skills and technical knowledge in a cybersecurity, systems administration or software engineering role. Professionally adept at problem-solving, troubleshooting, and resolving issues to achieve optimal process flow in fast-paced environments.
        </p>
      </div>
    </section>
  `;

  const educationContent = `
    <section class="education-section">
      <h2>Education</h2>
      <hr class="solid" />
      <div class="content-details">
        <h3>Oakland University</h3>
        <p>Bachelor of Science in Information Technology</p>
        <p>2023 - 2025</p>
        <p> Oaklands IT program is accredited by ABET, ensuring a high-quality education that meets industry standards. 
        My coursework covered a broad range of IT fundamentals, including database design, human-computer interaction, information security, interactive web and mobile design, computer networks, object-oriented computing, programming, and systems administration.
        I tailored my studies to my specific interests within the program through specialized cybersecurity tracks including, information security, security and privacy in computing, information security practices, and script programming.
      </div>
    </section>
  `;

  const experienceContent = `
    <section class="experience-section">
      <h2>Experience</h2>
      <hr class="solid" />
      <div class="content-details">
        <h3>Help Desk IT Technician</h3>
        <p>Oakland University</p>
        <p>2024 - Current</p>
        <p>
        Provide comprehensive IT support to faculty, staff, and students. Troubleshoot technical issues, install/configure hardware, software, and manage networks. 
        Offer tailored solutions and maintain detailed documentation. Assist users with software applications like Office 365, Adobe Acrobat, and Google Suite. 
        Troubleshoot Microsoft Open Database Connectivity. Participated in a domain migration project, leveraging WDS and Active Directory of 150 laptops. Working in a team environment. 

        </p>
      </div>
    </section>
  `;

  // Load initial content
  contentDiv.innerHTML = aboutContent;

  // Create circular buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const aboutBtn = document.createElement("button");
  const educationBtn = document.createElement("button");
  const experienceBtn = document.createElement("button");

  aboutBtn.classList.add("circle-button");
  educationBtn.classList.add("circle-button");
  experienceBtn.classList.add("circle-button");

  // Append buttons to the container
  buttonContainer.appendChild(aboutBtn);
  buttonContainer.appendChild(educationBtn);
  buttonContainer.appendChild(experienceBtn);

  // Add the button container to the DOM
  document.body.appendChild(buttonContainer);

  // Event listeners for the buttons
  aboutBtn.addEventListener("click", () => {
    contentDiv.innerHTML = aboutContent;
  });

  educationBtn.addEventListener("click", () => {
    contentDiv.innerHTML = educationContent;
  });

  experienceBtn.addEventListener("click", () => {
    contentDiv.innerHTML = experienceContent;
  });
});
