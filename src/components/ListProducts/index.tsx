"use client";
import { FormattedData } from "@/types/responseItems/index.type";
import React from "react";
import styles from "./styles.module.css";
import stylesShared from "../../styles/shared/items/styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Breadcrumb from "../Breadcrumb";

type ListProductsProps = {
  data: Omit<FormattedData, "author">;
};

const ListProducts = ({ data }: ListProductsProps) => {
  const { items } = data;

  const router = useRouter();
  const handleDetails = (idProduct: string) => {
    router.push(`/items/${idProduct}`);
  };

  return (
    <div className={stylesShared["wrapper"]}>
      {/* <Breadcrumb /> */}
      <div className={stylesShared["wrapper-card"]}>
        {items.length > 0 ? (
          items.map((item) => (
            <div className={stylesShared["content-card"]} key={item.id}>
              <div
                className={stylesShared["content-card-items"]}
                onClick={() => handleDetails(item.id)}
              >
                <div className={stylesShared.img}>
                  <Image
                    src={item.picture}
                    width={180}
                    height={180}
                    alt={item.title}
                    style={{ borderRadius: "4px" }}
                    quality={100}
                  />
                </div>

                <div className={stylesShared["info-price"]}>
                  <h1 className={stylesShared.price}>
                    {item.price.amount.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </h1>

                  <span className={stylesShared.title}>{item.title}</span>
                </div>
              </div>
              <hr className={stylesShared.hr} />
            </div>
          ))
        ) : (
          <div className={stylesShared["content-card"]}>
            <div className={stylesShared["content-card-items"]}>
              <h1>PRODUTO NAO ENCONTRADO, TENTE ALGO MELHOR</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProducts;
