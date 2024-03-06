"use client";

import React from "react";
import styles from "./styles.module.css";

const Breadcrumb = ({ categories }: { categories: string[] | undefined }) => {
  return (
    <div className={styles.breadcrumb}>
      {categories ? (
        categories.map((item) => (
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
