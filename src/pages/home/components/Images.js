import React from "react";
function Images({ styles, link,alt}) {
  return <img className={styles} src={link} alt={alt} />;
}

export default Images;
