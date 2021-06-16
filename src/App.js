import React, { useState } from "react";
import { data } from "./data";
import JobInfo from "./components/JobInfo";
import Categories from "./components/Categories";
import TopCategories from "./components/TopCategories";

const App = () => {
  const [jobs, setJobs] = useState(data);
  const [categories, setCategories] = useState([]);

  const filterCategory = (category) => {
    const newCategory = data.filter(
      (item) =>
        item.role === category ||
        item.level === category ||
        item.languages.includes(category) ||
        item.tools.includes(category)
    );

    if (categories.includes(category)) {
      return null;
    } else {
      const newItem = { id: new Date().getTime().toString(), title: category };
      setCategories([...categories, newItem]);
    }
    setJobs(newCategory);
  };

  const deleteItem = (id) => {
    setCategories(categories.filter((item) => item.id !== id));
    if (categories.length === 1) {
      setJobs(data);
      return;
    }
  };

  return (
    <>
      <header className="header"></header>
      {categories.length > 0 && (
        <section className="categories top-categories">
          <TopCategories
            data={data}
            categories={categories}
            setCategories={setCategories}
            setJobs={setJobs}
            deleteItem={deleteItem}
          />
        </section>
      )}
      <div className="container">
        {jobs.map((item) => {
          return (
            <div className="job-listings" key={item.id}>
              <JobInfo item={item} />
              <div className="categories">
                <Categories item={item} filterCategory={filterCategory} />
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/kelvin-ochubili/"
          target="_blank"
          rel="noreferrer"
        >
          Kelvin Ochubili
        </a>
        .
      </footer>
    </>
  );
};

export default App;
