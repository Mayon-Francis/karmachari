import React from "react";
import { Helmet } from "react-helmet";

function CustomTitle({ title }) {
  return (
    <Helmet>
      <title>Karmachari | {title}</title>
    </Helmet>
  );
}

export default CustomTitle;