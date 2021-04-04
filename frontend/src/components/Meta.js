import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To DesignShop",
  description: "We sell the best handmade products for cheap",
  keywords: "handmade, buy handmade, cheap handmade products",
};

export default Meta;
