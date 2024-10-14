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
          <h3>Oracle - Block Storage Management Plane Team</h3>
          <p>Software Engineer | July 2021 - March 2023</p>
          <ul>
            <li>Collaborated with cross-functional OCI teams of 20+ software engineers, applying Agile methodology to efficiently resolve issues and deliver solutions.</li>
            <li>Executed, unit tested, and integration tested the functionality to facilitate streamlined copies and exportation of backup data of block volumes, cutting down 2+ hours of manual labor of customers.</li>
            <li>Designed and implemented DropWizard Rest APIs with feature flags, enabling the establishment of optimization features in necessary applications, removing more than 500 lines of code in the codebase.</li>
            <li>Revitalized source code dependencies and imports to preempt potential disruptions stemming from planned upgrades, alongside the implementation of Maven plugins to ensure adherence by engineers.</li>
            <li>Monitored, mitigated, patched, and resolved 200+ critical issues in deployed cloud applications across 50+ regions, ensuring high reliability and availability.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>STEMHive</h3>
          <p>Software Engineer | February 2019 - January 2023</p>
          <ul>
            <li>Designed STEM lesson plans for 50+ secondary school students, exposing them to weekly hands-on projects with guidance from active professionals.</li>
            <li>Directed a team of 6 engineers and STEM professionals to establish a React social website that showcases students’ awards as they attend workshops, as well as spending virtual currency for STEM tools, increasing motivation by 40% as measured in seasonal surveys.</li>
            <li>Utilized Express framework to manage RESTful web services and middleware configurations, while ensuring security, domain setup, and database integration with Firebase.</li>
          </ul>
        </div>
        {/* Add more experience items as needed */}
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Wordle Multiplayer</h3>
          <p>June 2024 - Present</p>
          <ul>
            <li>Developing a social mobile game (Android) inspired by Wordle, enabling real-time multiplayer competition and daily leaderboards for fastest completion times.</li>
            <li>Utilizing Kotlin for native Android development and Spring Boot for robust backend services.</li>
            <li>Leveraging Google Cloud Platform (GCP) to ensure scalability and performance, including MemoryStore for Redis
            (leaderboards) and Cloud SQL (game data).</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>CookingForDummies</h3>
          <p>July 2023</p>
          <ul>
            <li>Created a user-friendly Flutter recipe sharing app, featuring a visually appealing gallery of recipes, complete with details on the cooking time as well as the owner of the post.</li>
            <li>Implemented user authentication using AWS Cognito, data storage with AWS DynamoDB and S3,and AWS Lambda for serverless functions.</li>
          </ul>
        </div>
        {/* Add more project items as needed */}
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>Google Cloud Platform Professional Cloud Architect | August 2024</li>
          {/* Add more certifications as needed */}
        </ul>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <p>Computer Engineering | City College of New York | August 2016 - June 2021</p>
        </div>
        {/* Add more education items as needed */}
      </section>

      <section className="resume-section">
        <h2>Affiliations</h2>
        <ul>
          <li>Community Ambassador | Brilliant Black Minds @ Karat | 2024</li>
          <li>Senator | National Society of Black Engineers | 2020 - 2021</li>
          {/* Add more affiliations as needed */}
        </ul>
      </section>
    </div>
  );
};

export default Resume;