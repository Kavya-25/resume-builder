import React, { useState, useRef } from "react";
import "./Body.scss";
import { Editor } from "../Editor/Editor";
import Resume from "../Resume/Resume";
import ReactToPrint from "react-to-print";
import { useEffect } from "react";

export const Body = () => {
  const colors = ["#201775", "#009193", "#424242", "#771624", "#5278D2"];

  const sections = {
    basicInfo: "Basic Info",
    skills: "Skills",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Acheivements",
    summary: "Summary",
    others: "Others",
  };

  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.others]: {
      id: sections.others,
      sectionTitle: sections.others,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);
  return (
    <div className="body">
      <h1 className="heading">Resume Builder</h1>
      <div className="toolbar">
        <div className="colors">
          {colors.map((item, idx) => {
            return (
              <span
                key={idx}
                style={{ backgroundColor: item }}
                className={`color ${activeColor === item ? "active" : ""}`}
                onClick={() => setActiveColor(item)}
              ></span>
            );
          })}
        </div>
        <ReactToPrint
          trigger={() => {
            return <button>Download</button>;
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className="main">
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          information={resumeInformation}
          sections={sections}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
};
