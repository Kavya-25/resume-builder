import React, { useState } from "react";
import "./Body.scss";
import { Editor } from "../Editor/Editor";
import { useEffect } from "react";
import { Resume } from "../Resume/Resume";

export const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Acheivements",
    summary: "Summary",
    others: "Others",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
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
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
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
                className="color"
              ></span>
            );
          })}
        </div>
        <button>Download</button>
      </div>
      <div className="main">
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume information={resumeInformation} sections={sections} />
      </div>
    </div>
  );
};
