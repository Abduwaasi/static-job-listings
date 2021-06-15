import React from "react";

const JobInfo = ({ item }) => {
  const {
    company,
    logo,
    position,
    postedAt,
    contract,
    location,
    featured,
    isNew,
  } = item;
  return (
    <div className="job-info">
      <img src={logo} alt={company} />
      <div className="job-details">
        <h5 className="company">
          {company}
          {isNew && <span className="new">new!</span>}
          {featured && <span className="featured">featured</span>}
        </h5>
        <h4 className="position">{position}</h4>
        <h5 className="time">
          <span>{postedAt} . </span>
          <span>{contract} . </span>
          <span>{location}</span>
        </h5>
      </div>
    </div>
  );
};

export default JobInfo;
