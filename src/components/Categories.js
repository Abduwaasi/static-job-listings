import React from "react";

const Categories = ({ item, filterCategory }) => {
  const { role, level, languages, tools } = item;
  return (
    <>
      <h5 className="category" onClick={() => filterCategory(role)}>
        {role}
      </h5>
      <h5 className="category" onClick={() => filterCategory(level)}>
        {level}
      </h5>
      {languages.map((language) => {
        return (
          <h5 className="category" onClick={() => filterCategory(language)}>
            {language}
          </h5>
        );
      })}
      {tools.map((tool) => {
        return (
          <h5 className="category" onClick={() => filterCategory(tool)}>
            {tool}
          </h5>
        );
      })}
    </>
  );
};

export default Categories;
