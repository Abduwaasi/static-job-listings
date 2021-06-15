import React from "react";
import icon_remove from "../assets/icon_remove.svg";
const TopCategories = ({
  categories,
  setJobs,
  setCategories,
  data,
  deleteItem,
}) => {
  return (
    <>
      {categories.map((category, index) => {
        const { id, title } = category;
        return (
          <div className="top-category ">
            <h5 key={index} onClick={() => deleteItem(id)}>
              {title}
              <img src={icon_remove} alt="" />
            </h5>
          </div>
        );
      })}
      <button
        className="clear-btn"
        onClick={() => {
          setCategories([]);
          setJobs(data);
        }}
      >
        Clear
      </button>
    </>
  );
};

export default TopCategories;
