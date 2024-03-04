"use client";
import Image from "next/image";
import styles from "./page.module.css";

import logo from "../assets/Logo_ML@2x.png.png.png";
import search from "../assets/ic_Search@2x.png.png.png";
import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.content_search}>
          <Image src={logo} alt="logo meli" height={35} quality={100} />
          <form className={styles.form} onSubmit={(ev) => handleSubmit(ev)}>
            <label htmlFor="search" />
            <input
              id="search"
              type="text"
              placeholder="Buscar produtos, marcas e muito mais…"
              name="search"
            />
            <button type="submit">
              <Image
                src={search}
                alt="icone de busca"
                height={20}
                width={20}
                quality={100}
                className={styles.image}
              />
            </button>
          </form>
        </div>
      </header>
    </main>
  );
}
