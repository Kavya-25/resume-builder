import { useState } from "react";
import "./Header.scss";

export const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const handleModes = () => {
    if (isDark) {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    } else {
      document.body.style.backgroundColor = "#100f0f";
      document.body.style.color = "#fff";
    }
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "header" : "header light"}>
      <div className="container">
        <div className="text">
          <h1>
            Unlock Your Career Potential with our <span>Powerful Resume </span>
            Builder
          </h1>
          <p>An Efficient tool for creating professional resumes.</p>
        </div>
        <div className="img">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="b" gradientTransform="rotate(-45 .5 .5)">
                <stop offset="0%" stopColor="#4158D0" />
                <stop offset="50%" stopColor="#C850C0" />
                <stop offset="100%" stopColor="#FFCC70" />
              </linearGradient>
              <clipPath id="a">
                <path
                  fill="currentColor"
                  d="M908 633.5Q818 767 687 792t-268 55.5q-137 30.5-255-76t-61-251Q160 376 217 242T427 78q153-30 269 65t209 226q93 131 3 264.5Z"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#a)">
              <path
                fill="url(#b)"
                d="M908 633.5Q818 767 687 792t-268 55.5q-137 30.5-255-76t-61-251Q160 376 217 242T427 78q153-30 269 65t209 226q93 131 3 264.5Z"
              />
            </g>
          </svg>
          <img
            src="https://www.empoweryouth.com/assets/themes/ey/images/pages/company-and-candidate/cv.png"
            alt=""
          />
        </div>
      </div>
      <button onClick={handleModes}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
