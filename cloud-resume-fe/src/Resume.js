import React from 'react';
//import './Resume.css'; // Assuming a CSS file for styling

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Daniel Gaston</h1>
        <p>Software Engineer | <a href="https://www.linkedin.com/in/daniel-gaston/">LinkedIn</a> | <a href="https://github.com/okimin">GitHub</a></p>
      </header>

      <section className="resume-section">
        <h2>Background Summary</h2>
        <p>Software Engineer that wants to make a change in wherever he is involved, through code and mobility.</p>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <p><b>Programming Languages:</b> Java (Expert), Python(Intermediate), C++(Intermediate), Dart(Intermediate), Kotlin(Intermediate),Javascript(Beginner), Typescript(Beginner)</p>
        <p><b>Technologies:</b> AWS, Bash, Bitbucket, DropWizard, Git, Grafana, Firebase, Flutter, IntelliJ, Jira, Postgresql, ReactJS, Shell, SpringBoot, TeamCity, Terraform, Visual Studio Code, Apache Kafka, Elasticsearch</p>
      </section>

      <section className="resume-section">
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>Company Name</h3>
          <p>Position | Dates</p>
          <ul>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
            <li>Achievement 3</li>
            {/* Add more achievements as needed */}
          </ul>
        </div>
        {/* Add more experience items as needed */}
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project Name</h3>
          <p>Description</p>
          <ul>
            <li>Technology used</li>
            <li>Role in the project</li>
            <li>Outcome or impact</li>
          </ul>
        </div>
        {/* Add more project items as needed */}
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>Certification Name | Issuer | Year</li>
          {/* Add more certifications as needed */}
        </ul>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Degree Name</h3>
          <p>Major | University | Year</p>
        </div>
        {/* Add more education items as needed */}
      </section>

      <section className="resume-section">
        <h2>Affiliations</h2>
        <ul>
          <li>Affiliation 1</li>
          <li>Affiliation 2</li>
          {/* Add more affiliations as needed */}
        </ul>
      </section>
    </div>
  );
};

export default Resume;