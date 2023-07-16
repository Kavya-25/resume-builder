import { useState, useRef, useEffect } from "react";
import "./Resume.scss";

import { GoDotFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { forwardRef } from "react";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;

  const containerRef = useRef();

  const [column, setColumn] = useState([], []);

  const info = {
    workExp: information[sections.workExp],
    skills: information[sections.skills],
    project: information[sections.project],
    achievements: information[sections.achievements],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    others: information[sections.others],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDivs = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        className={`section  ${info.workExp?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="sectionTitle">{info.workExp.sectionTitle}</div>
        <div className="content">
          {info.workExp?.details?.map((item) => (
            <div className="item" key={item.title}>
              <div className="item-container">
                <div className="main">
                  {item.title ? (
                    <div className="title">•&nbsp;{item.title}</div>
                  ) : (
                    ""
                  )}
                  {item.companyName ? (
                    <div className="subtitle">{item.companyName}</div>
                  ) : (
                    ""
                  )}
                  {item.certificationLink ? (
                    <a
                      href={item.certificationLink}
                      target="_blank"
                      className="link"
                      style={{ color: `${props.activeColor}` }}
                    >
                      Certificate Link
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <div className="main-2">
                  {item.startDate && item.endDate ? (
                    <span className="date">
                      {getFormattedDate(item.startDate)}-
                      {getFormattedDate(item.endDate)}
                    </span>
                  ) : (
                    ""
                  )}
                  {item.location ? (
                    <div className="location">{item.location}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.skills]: (
      <div
        key={"skills"}
        className={`section  ${info.skills?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="sectionTitle">{info.skills.sectionTitle}</div>
        <div className="content">
          <div className="item">
            <div className="skill-container">
              {info.skills?.detail?.technologies ? (
                <div className="skill-text">
                  <span>
                    <GoDotFill className="dot" />
                    Technologies :
                  </span>
                  {info.skills?.detail?.technologies}
                </div>
              ) : (
                ""
              )}
              {info.skills?.detail?.libraries ? (
                <div className="skill-text">
                  <span>
                    <GoDotFill className="dot" />
                    Libraries/Frameworks :
                  </span>
                  {info.skills?.detail?.libraries}
                </div>
              ) : (
                ""
              )}
              {info.skills?.detail?.tools ? (
                <div className="skill-text">
                  <span>
                    <GoDotFill className="dot" />
                    Tools :
                  </span>
                  {info.skills?.detail?.tools}
                </div>
              ) : (
                ""
              )}
              {info.skills?.detail?.softskills ? (
                <div className="skill-text">
                  <span>
                    <GoDotFill className="dot" />
                    Soft Skills :
                  </span>
                  {info.skills?.detail?.softskills}
                </div>
              ) : (
                ""
              )}
              {info.skills?.detail?.otherskills ? (
                <div className="skill-text">
                  <span>
                    <GoDotFill className="dot" />
                    Other Skills :
                  </span>
                  {info.skills?.detail?.otherskills}
                </div>
              ) : (
                ""
              )}
              {info.skills?.detail?.languages ? (
                <div className="skill-text">
                  <span>
                    <GoDotFill className="dot" />
                    Languages :
                  </span>
                  {info.skills?.detail?.languages}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        className={`section projects ${
          info.project?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">{info.project.sectionTitle}</div>
        <div className="content">
          {info.project?.details?.map((item) => (
            <div className="item" key={item.title}>
              <div className="item-container">
                <div className="main">
                  {item.title ? (
                    <div className="title">•&nbsp;{item.title}</div>
                  ) : (
                    ""
                  )}
                  {item.overview && (
                    <div className="overview">{item.overview}</div>
                  )}
                </div>
                <div className="main-2">
                  {item.link ? (
                    <a
                      href={item.link}
                      className="link"
                      target="_blank"
                      style={{ color: `${props.activeColor}` }}
                    >
                      {/* <AiOutlineLink className="icon" /> */}
                      Project Deployed Link
                    </a>
                  ) : (
                    ""
                  )}

                  {item.github ? (
                    <a
                      href={item.github}
                      className="link"
                      target="_blank"
                      style={{ color: `${props.activeColor}` }}
                    >
                      {/* <AiFillGithub className="icon" /> */}
                      Project Github Link
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        className={`section  ${info.education?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="sectionTitle">{info.education.sectionTitle}</div>
        <div className="content">
          {info.education?.details?.map((item) => (
            <div className="item" key={item.title}>
              <div className="item-container">
                <div className="main">
                  <div className="title">•&nbsp;{item.title}</div>
                  <div className="subtitle">{item.college}</div>
                </div>
                <div className="main-2">
                  {item.startDate && item.endDate ? (
                    <div className="date">
                      {getFormattedDate(item.startDate)}-
                      {getFormattedDate(item.endDate)}
                    </div>
                  ) : (
                    ""
                  )}
                  {item?.cgpi ? <div>CGPI/Percentage : {item.cgpi}</div> : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievements]: (
      <div
        key={"achievements"}
        className={`section projects ${
          info.achievements?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">{info.achievements.sectionTitle}</div>
        {info.achievements?.points?.length > 0 ? (
          <ul className="numbered">
            {info.achievements?.points?.map((elem, index) => (
              <li className="point" key={elem + index}>
                {elem}
              </li>
            ))}
          </ul>
        ) : (
          <span />
        )}
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        className={`section projects ${
          info.summary?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">{info.summary.sectionTitle}</div>
        <div className="overview">{info.summary?.detail}</div>
      </div>
    ),
    [sections.others]: (
      <div
        key={"other"}
        className={`section projects ${
          info.others?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">{info.others.sectionTitle}</div>
        <div className="overview">{info.others?.detail}</div>
      </div>
    ),
  };

  useEffect(() => {
    setColumn([
      [sections.skills, sections.workExp, sections.education, sections.project],
      [sections.achievements, sections.summary, sections.others],
    ]);
  }, []);

  useEffect(() => {
    const resumecontainer = containerRef.current;

    if (!props.activeColor || !resumecontainer) {
      return;
    }
    resumecontainer.style.setProperty("color", props.activeColor);
    console.log(props.activeColor);
  }, [props.activeColor]);

  return (
    <div className="resume" ref={ref}>
      <div className="resume-header">
        <div className="resume-container">
          <h3 className="heading">{info.basicInfo?.detail?.name}</h3>
          <span
            className="sub-heading"
            style={{ color: `${props.activeColor}` }}
          >
            {info.basicInfo?.detail?.title}
          </span>
          {info.basicInfo?.detail?.phone ? (
            <a href="" className="mobile">
              <span>Mobile : </span>
              {info.basicInfo?.detail?.phone}
            </a>
          ) : (
            ""
          )}
          {info.basicInfo?.detail?.email ? (
            <a href="" className="mobile">
              {/* <MdAlternateEmail className="icon" /> */}
              <span>Email : </span>
              {info.basicInfo?.detail?.email}
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="links">
          {info.basicInfo?.detail?.linkedin ? (
            <a
              href={info.basicInfo?.detail?.linkedin}
              target="_blank"
              className="link"
              style={{ color: `${props.activeColor}` }}
            >
              LinkedIn
            </a>
          ) : (
            ""
          )}
          {info.basicInfo?.detail?.github ? (
            <a
              href={info.basicInfo?.detail?.github}
              target="_blank"
              className="link"
              style={{ color: `${props.activeColor}` }}
            >
              Github
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="resume-main">
        <div className="col1">
          {column[0]?.map((item) => sectionDivs[item])}
        </div>
        <div className="col2">
          {column[1]?.map((item) => sectionDivs[item])}
        </div>
      </div>
    </div>
  );
});

Resume.displayName = Resume;

export default Resume;
