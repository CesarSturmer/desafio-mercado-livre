"use client";
import { FormattedData } from "@/types/responseItems/index.type";
import React from "react";
import stylesShared from "../../styles/shared/items/styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Breadcrumb from "../Breadcrumb";
import iconeShipping from "@/assets/ic_shipping.png";
import iconeSearch from "@/assets/erro-pesquisa.webp";

type ListProductsProps = {
  data: Omit<FormattedData, "author">;
};

const ListProducts = ({ data }: ListProductsProps) => {
  const { items, categories } = data;
  const router = useRouter();

  const handleDetails = (idProduct: string) => {
    const haveCategories = !!categories.length;

    router.push(
      `/items/${idProduct} ${haveCategories ? `?categories=${categories}` : ""}`
    );
  };

  return (
    <div className={stylesShared["wrapper"]}>
      <Breadcrumb categories={categories} />
      <div className={stylesShared["wrapper-card"]}>
        {items.length > 0 && items !== null ? (
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
                  <div className={stylesShared["info-content-price"]}>
                    <h1 className={stylesShared.price}>
                      {item.price.amount.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </h1>

                    {item.free_shipping && (
                      <Image
                        src={iconeShipping}
                        alt="icone caminhao de entrega"
                      />
                    )}
                  </div>

                  <span className={stylesShared.title}>{item.title}</span>
                </div>
              </div>

              <hr className={stylesShared.hr} />
            </div>
          ))
        ) : (
          <div className={stylesShared["content-card"]}>
            <div
              className={stylesShared["content-card-error"]}
              style={{ padding: "42px 40px 32px" }}
            >
              <div className={stylesShared["content-card-error-row"]}>
                <Image
                  width={80}
                  height={80}
                  src={iconeSearch}
                  alt="lupa com de busca para resultado nao encontrado"
                />
                <div>
                  <h1 className={stylesShared.title}>
                    Não há anúncios que correspondam à sua busca
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProducts;
