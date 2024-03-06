"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import logo from "../../assets/Logo_ML@2x.png.png.png";
import searchIcone from "../../assets/ic_Search@2x.png.png.png";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (search.length > 0) {
      router.replace(`/${search}`);
    }
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.content_search}>
        <Image
          src={logo}
          alt="logo meli"
          height={35}
          quality={100}
          style={{ cursor: "pointer" }}
          onClick={handleHome}
        />
        <form className={styles.form} onSubmit={(ev) => handleSubmit(ev)}>
          <label htmlFor="search" />
          <input
            id="search"
            type="text"
            placeholder="Nunca desejes de buscar"
            name="search"
            onChange={({ target }) => setSearch(target.value)}
          />
          <button type="submit">
            <Image
              src={searchIcone}
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
  );
};

export default Header;
