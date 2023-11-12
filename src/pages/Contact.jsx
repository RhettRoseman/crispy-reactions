import React from "react"
import "./styles/contact.css"

export default function Contact() {
  return (
    <div className="contact">
      <div>
      <h2>Joseph Roseman III</h2>
        <p>Web Developer</p>
      </div>
      <div>
      <h2>Contact Information</h2>
        <p>Email: your.email@example.com</p>
        <p>Phone: 777-777-7777</p>
        <p>LinkedIn: linkedin.com/in/yourname</p>
        <p>GitHub: github.com/yourusername</p>
      </div>
      <div>
      <h2>Education</h2>
        <div>
          <h3>Certificate in Computer Science</h3>
          <p>University Name, Graduation Year</p>
        </div>
        <div>
        <h2>Work Experience</h2>
        <div>
          <h3>Software Developer</h3>
          <p>Company Name, Start Date - End Date</p>
          <ul>
            <li>Developed and maintained web applications.</li>
            <li>Collaborated with cross-functional teams.</li>
          </ul>
        </div>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (React, Express, Node.js)</li>
          <li>HTML, CSS</li>
          <li>Database Management (MongoDB, MySQL, GraphQl)</li>
          <li>Version Control (Git)</li>
        </ul>
        </div>
      </div>
    </div>
  )

}