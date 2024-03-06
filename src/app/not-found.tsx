"use client";
import Image from "next/image";
import React from "react";

import imgnotFound from "@/assets/not-found.webp";
import styles from "@/styles/shared/not-found/styles.module.css";
import { useRouter } from "next/navigation";

const PageNotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <Image src={imgnotFound} alt="imagem de pagina nao encontrada" />
      <button className={styles.button} onClick={() => router.push("/")}>
        Ir para home
      </button>
    </div>
  );
};

export default PageNotFound;
