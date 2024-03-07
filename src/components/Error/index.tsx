import Image from "next/image";
import React from "react";

import imgnotFound from "@/assets/error.webp";
import styles from "@/styles/shared/not-found/styles.module.css";

const Error = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={imgnotFound} alt="imagem de erro de sistema" />
    </div>
  );
};

export default Error;
