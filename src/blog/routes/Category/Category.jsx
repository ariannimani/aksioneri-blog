import React from "react";

import BasicCard from "../../components/BasicCard/BasicCard";
export default function Category({ category }) {
  return (
    <React.Fragment>
      <BasicCard featuredPost={category} />
    </React.Fragment>
  );
}
