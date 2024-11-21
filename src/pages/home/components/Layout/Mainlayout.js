import React from "react";

function Mainlayout({ children,styles }) {
  return <section className={styles}>{children}</section>;
}

export default Mainlayout;
