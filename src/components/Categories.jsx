import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted font-bold">
      {categories.map((category) => (
        <Link key={category.category} to="/card" role="tab" className="tab">
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
