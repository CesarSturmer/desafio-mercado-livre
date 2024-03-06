"use client";

import React from "react";
import styles from "./styles.module.css";

const Breadcrumb = ({ categories }: { categories: string[] | undefined }) => {
  console.log("🚀 ~ Breadcrumb ~ categories:", categories);

  return (
    <div className={styles.breadcrumb}>
      {categories ? (
        categories.map((item, index, array) => (
          <p className={styles["breadcrumb-description"]} key={item}>
            {item} {index === array.length - 1 ? "" : "> "}
          </p>
        ))
      ) : (
        <p className={styles["breadcrumb-description"]}></p>
      )}
    </div>
  );
};

export default Breadcrumb;
