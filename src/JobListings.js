import { useState } from "react";
import "./JobListings.css";
import Filter from "./Filter.js";

const JobListings = (props) => {
  const [jobData, setJobData] = useState(props.jobData);
  const [filteredList, setFilteredList] = useState([]);
  const [isActive, setIsActive] = useState("true");

  const handleOnClick = (e) => {
    let result = jobData.filter(
      (job) =>
        job.role.includes(e) ||
        job.level.includes(e) ||
        job.languages.includes(e) ||
        job.tools.includes(e)
    );
    if (!filteredList.includes(e)) filteredList.push(e);
    setJobData(result);
    setIsActive(false);
  };

  return (
    <div className="container">
      <Filter
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        setJobData={setJobData}
        jobData={jobData}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {jobData.map(
        ({
          company,
          id,
          logo,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
          new: newAd,
        }) => {
          return (
            <div className="cardContainer" key={id}>
              <div
                className={
                  featured ? "jobCard borderLeft" : "jobCard"
                }
              >
                <div className="imageContainer cardContent">
                  <img src={logo} alt="" />
                </div>
                <div className="cardContent centerContent">
                  <div className="centerTitle">
                    <li className="cardListItem company">
                      {company}
                    </li>
                    <li
                      className={newAd ? "isNewAd" : "cardListItem"}
                    >
                      {newAd ? "New!" : ""}
                    </li>
                    <li
                      className={
                        featured ? "featured" : "cardListItem"
                      }
                    >
                      {featured ? "Featured" : ""}
                    </li>
                  </div>
                  <div className="centerBody">
                    <li className="cardListItem" position>
                      {position}
                    </li>
                  </div>
                  <div className="centerFoot">
                    <li className="cardListItem postedAt">
                      {postedAt}
                    </li>
                    <li className="cardListItem end contract">
                      {contract}
                    </li>
                    <li className="cardListItem end">{location}</li>
                  </div>
                </div>
                <div className="cardContent endContent">
                  <li
                    onClick={(e) => handleOnClick(e.target.innerText)}
                  >
                    {" "}
                    {role}
                  </li>
                  <li
                    onClick={(e) => handleOnClick(e.target.innerText)}
                  >
                    {level}
                  </li>

                  {languages.map((lang, index) => (
                    <li
                      key={index}
                      onClick={(e) =>
                        handleOnClick(e.target.innerText)
                      }
                    >
                      {lang}
                    </li>
                  ))}

                  {tools.map((tool, index) => (
                    <li
                      key={index}
                      onClick={(e) =>
                        handleOnClick(e.target.innerText)
                      }
                    >
                      {tool}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default JobListings;
