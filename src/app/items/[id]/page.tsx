import React from "react";
import Header from "@/components/Header";
import styles from "./page.module.css";
import { FormattedDataDetails } from "@/types/responseItems/index.type";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

async function getDetailsProduct(idProduct: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/items/${idProduct}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const response: FormattedDataDetails = await getDetailsProduct(params.id);

  return (
    <>
      {/* <Breadcrumb /> */}

      <div className={styles["wrapper"]}>
        <div className={styles["wrapper-card"]}>
          <div className={styles["content-img"]}>
            <Image
              src={response.item.picture}
              style={{
                borderRadius: "4px",
                width: "100%",
                // height: "100%",
                objectFit: "contain",
              }}
              width={0}
              height={500}
              alt={response.item.title}
              loading="lazy"
              //quality={100}
            />
          </div>

          <div className={styles["content-info-payment"]}>
            <div className={styles["content-first-section-payment"]}>
              <span className={styles["info-payment-condition"]}>
                {response.item.condition} - {response.item.sold_quantity}{" "}
                vendidos
              </span>

              <h3 className={styles["info-payment-title"]}>
                {response.item.title}
              </h3>
            </div>

            <div>
              <h1 className={styles["content-info-price"]}>
                {response.item.price.amount.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </h1>
            </div>

            <button className={styles.button}>Comprar</button>
          </div>

          <div className={styles["content-info-description"]}>
            <h1 className={styles["content-info-price"]}>
              Descripción del producto
            </h1>

            <p>{response.item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
