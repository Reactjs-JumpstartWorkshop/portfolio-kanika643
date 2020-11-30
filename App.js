import React from "react";

import "./styles.css";

export default function App() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center"}}>Portfolio Template</h1>
      </div>
      <h2 style={{color:"red",fontFamily:"serif"}}>
        <u>Name</u>:
      </h2>
      <b>Kanika Gupta</b>
      <h2 style={{color:"red"}}>
        <u>Projects</u>
      </h2>
      <ul>
        <li><b>Project name:</b>Hotel website</li>
        <ul>
          <li><b>Tech used:</b>HTML,CSS,javascript,php,react javascript,Mysql</li>
          <li><b>No.of team members:</b>4</li>
          <li>
            <b>Purpose of project:</b>To fascinate the customers with our food and
            bevarages with different schemes and discount and any person all
            over india can reach us through our hotel website.
          </li>
          <li><b>My role in the project:</b>front-end Designing.</li>
          <li><b>Duration of the project:</b>ongoing</li>
        </ul>
      </ul>
      <h2 style={{color:"red"}}>
        <u>Skills with level</u>
      </h2>
      <ul>
        <li><b>Expert:</b>Mysql,CSS,HTML,Coding</li>
        <li>
          <b>Proficient:</b>Time Management,Critical Thinking,Verbal cmmunication
        </li>
        <li><b>Novice:</b>Active listening,Public speaking</li>
      </ul>
      <h2 style={{color:"red"}}>
        <u>Courses and Certificates</u>
      </h2>
      <ul>
        <li>
          Design Thinking-A creative problem solving approach,Eduvation India.
        </li>
        <li>Masterclass on tips for participating in hackathon(6 June 2020)</li>
        <li>
          Various certificates in participating in Declamation contests and
          extra co-cricular activities in college
        </li>
      </ul>
      <h2 style={{color:"red"}}>
        <u>Subjects of interests</u>
      </h2>
      <ul>
        <li><b>Computer Languages:</b>C,C++</li>
        <li><b>Web Technologies:</b>HTML,CSS,Javascript,PHP</li>
        <li><b>Database:</b>Mysql</li>
      </ul>
      <h2 style={{color:"red"}}>
        <u>Academics</u>
      </h2>
      <ul>
        <li>
          Persuing Bachelor of computer application from Tilak Raj Chaddha
          Institute of management And Technology affiliated from Kurukshetra
          university-Passing Year:2021
        </li>
        <li>
          Persued secondary education and matriculation from Rainbow School
          affliated from CBSE
        </li>
      </ul>
    </div>
  );
}
