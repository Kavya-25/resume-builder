import { useState, useEffect } from "react";
import "./Editor.scss";
import { InputControl } from "../InputControl/InputControl";
import { RxCross1 } from "react-icons/rx";
import { info } from "sass";

export const Editor = (props) => {
  const sections = props.sections;
  const information = props.information;

  const [activeKey, setActiveKey] = useState(Object.keys(sections)[0]);

  const [activeInformation, setActiveInformation] = useState();
  information[sections[Object.keys(sections)[0]]];

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };

    if (!Array.isArray(tempValues.points)) {
      tempValues.points = [];
    }
    tempValues.points[index] = value;
    setValues(tempValues);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("hi");
    switch (sections[activeKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificateLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievements: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievements]: {
            ...prev[sections.achievements],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;

        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.others: {
        const tempDetail = values.others;

        props.setInformation((prev) => ({
          ...prev,
          [sections.others]: {
            ...prev[sections.others],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeKey]]: {
        ...information[sections[activeKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeKey]]: {
        ...information[sections[activeKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  const workExBody = (
    <div className="detail">
      <div className="row">
        <InputControl
          label="Title"
          placeholder="eg. front-end developer"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="e.g amazon,microsoft"
          value={values.companyName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, companyName: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Certificate Link"
          placeholder="Enter link"
          value={values.certificateLink}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, certificateLink: e.target.value }))
          }
        />
        <InputControl
          label="Location"
          placeholder="e.g remote"
          value={values.location}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, location: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start day of work"
          value={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end day of work"
          value={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
      <div className="column">
        <label htmlFor="">Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className="detail">
      <div className="row">
        <InputControl
          label="Title"
          placeholder="eg. Chat app"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
          value={values.overview}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, overview: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Deployed Link"
          placeholder="e.g projectexpample.vercel.app"
          value={values.link}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, link: e.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="e.g github.com/user/project-repo"
          value={values.github}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, github: e.target.value }))
          }
        />
      </div>
      <div className="column">
        <label htmlFor="">Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className="detail">
      <div className="row">
        <InputControl
          label="Title"
          placeholder="eg. B-tech"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <InputControl
          label="School/College Name"
          placeholder="Enter institution name"
          value={values.college}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, college: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date"
          value={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <InputControl
          label="End date"
          type="date"
          placeholder="Enter end date"
          value={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className="detail">
      <div className="row">
        <InputControl
          label="Name"
          placeholder="Enter your Name"
          value={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="e.g frontend-developer"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter linkedin link"
          value={values.linkedin}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, linkedin: e.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link"
          value={values.github}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, github: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <InputControl
          label="Email Id"
          placeholder="e.g abc@example.com"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <InputControl
          label="Phone Number"
          placeholder="Enter mobile Number"
          value={values.phone}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className="detail">
      <div className="column">
        <label htmlFor="">Enter your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className="detail">
      <InputControl
        label="Summary"
        placeholder="Enter your summary/objective"
        value={values.summary}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, summary: e.target.value }))
        }
      />
    </div>
  );
  const othersBody = (
    <div className="detail">
      <InputControl
        label="others"
        placeholder="Enter something"
        value={values.others}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, others: e.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.others:
        return othersBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeKey]];
    setActiveInformation(activeInfo);
    setActiveDetailIndex(0);
    setSectionTitle(sections[activeKey]);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      others: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeKey]]);
  }, [information]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[sections[activeKey]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificateLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
  }, [activeDetailIndex]);

  return (
    <div className="editor">
      <div className="editor-header">
        {Object.keys(sections)?.map((key) => (
          <div
            className={`section ${activeKey === key ? "active" : ""}`}
            key={key}
            onClick={() => setActiveKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className="editor-body">
        <InputControl
          label="Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />

        <div className="chips">
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`chip ${
                    activeDetailIndex == index ? "active" : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeKey]} {index + 1}
                  </p>
                  <RxCross1
                    className="cross"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details.length > 0 ? (
            <div className="new" onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>

        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
};
