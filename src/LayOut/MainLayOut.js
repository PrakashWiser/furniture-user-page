import React from "react";

function MainLayOut({ children, styles }) {
  return <section className={styles}>{children}</section>;
}

export default MainLayOut;
