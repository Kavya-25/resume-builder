import { useState } from "react";
import "./Resume.scss";
import { MdAlternateEmail } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlinePhone,
  AiOutlineLink,
  AiOutlineCalendar,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";

export const Resume = (props) => {
  const information = props.information;
  const sections = props.sections;

  const [column, setColumn] = useState([], []);

  const workExpSection = (
    <div key={"workexp"} className="section workExp">
      <div className="sectionTitle">Work Experience</div>
      <div className="content">
        <div className="item">
          <div className="title">Frontend developer</div>
          <div className="subtitle">Company Name</div>
          <div className="date">
            <AiOutlineCalendar className="icon" />
            1/2/2020 to 2/8/2023
          </div>
          <a href="" className="link">
            <AiOutlineLink className="icon" />
            http://hillffairnith.com
          </a>
          <div className="location">
            <CiLocationOn className="icon" />
            Mumbai,India
          </div>
          <ul className="points">
            <li className="point">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, repudiandae.
            </li>
            <li className="point">This is point 1</li>
            <li className="point">This is point 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const projectSection = (
    <div key={"project"} className="section projects">
      <div className="sectionTitle">Projects</div>
      <div className="content">
        <div className="item">
          <div className="title">Project 1</div>
          <a href="" className="link">
            <AiOutlineLink className="icon" />
            http://hillffairnith.com
          </a>
          <a href="" className="link">
            <AiFillGithub className="icon" />
            http://github.com/Kavya-25/hillffair
          </a>
          <div className="overview">
            This project is a dummy and does nothing
          </div>
          <ul className="points">
            <li className="point">This is point 1</li>
            <li className="point">This is point 1</li>
            <li className="point">This is point 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const educationSection = (
    <div key={"education"} className="section education">
      <div className="sectionTitle">Education</div>
      <div className="content">
        <div className="item">
          <div className="title">B.tech</div>
          <div className="subtitle">NIT Hamirpur</div>
          <div className="date">
            <AiOutlineCalendar className="icon" />
            1/2/2020 to 2/8/2023
          </div>
        </div>
      </div>
    </div>
  );
  const achievementSection = (
    <div key={"achievements"} className="section achievements">
      <div className="sectionTitle">Achievements</div>
      <ul className="numbered">
        <li>this is some point</li>
        <li>this is some point</li>
        <li>this is some point</li>
      </ul>
    </div>
  );
  const summarySection = (
    <div key={"summary"} className="section summary">
      <div className="sectionTitle">Summary</div>
      <div className="overview">This is some summary</div>
    </div>
  );
  const otherSection = (
    <div key={"other"} className="section others">
      <div className="sectionTitle">Others</div>
      <div className="overview">This is others</div>
    </div>
  );

  useEffect(() => {
    setColumn([
      [projectSection, educationSection, summarySection],
      [workExpSection, achievementSection, otherSection],
    ]);
  }, []);

  return (
    <div className="resume">
      <div className="resume-header">
        <h3 className="heading">Name</h3>
        <h6 className="sub-heading">Frontend developer</h6>

        <div className="links">
          <a href="" className="link">
            <MdAlternateEmail className="icon" />
            Email@gmail.com
          </a>
          <a href="" className="link">
            <AiOutlinePhone className="icon" />
            1234567890
          </a>
          <a href="" className="link">
            <AiFillLinkedin className="icon" />
            https://www.linkedin.com/in/kavya-58a584208/
          </a>
          <a href="" className="link">
            <AiFillGithub className="icon" />
            https://github.com/Kavya-25/
          </a>
        </div>
      </div>
      <div className="resume-main">
        <div className="col1">{column[0]}</div>
        <div className="col2">{column[1]}</div>
      </div>
    </div>
  );
};
