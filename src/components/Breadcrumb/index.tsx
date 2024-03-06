"use client";

import React from "react";
import styles from "./styles.module.css";

const Breadcrumb = () => {
  const categories = window?.localStorage.getItem("categories");

  const listCategories = categories?.split(",");

  return (
    <div className={styles.breadcrumb}>
      {listCategories ? (
        listCategories.map((item) => (
          <p className={styles["breadcrumb-description"]} key={item}>
            {item}
          </p>
        ))
      ) : (
        <p className={styles["breadcrumb-description"]}>sem categoria</p>
      )}
    </div>
  );
};

export default Breadcrumb;
