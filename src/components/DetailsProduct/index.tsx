import React from "react";
import ReturnBreadcrumb from "@/app/items/[id]/breadcrumbclient";
import styles from "@/styles/shared/detailItem/styles.module.css";
import Image from "next/image";
import { FormattedDataDetails } from "@/types/responseItems/index.type";

const DetailsProduct = ({ data }: { data: FormattedDataDetails | null }) => {
  return (
    <>
      {data === null ? null : (
        <div className={styles["wrapper"]}>
          <ReturnBreadcrumb />
          <div className={styles["wrapper-card"]}>
            <div className={styles["content-img"]}>
              <Image
                src={data.item.picture}
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  height: "100%",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
                width={0}
                height={500}
                alt={data.item.title}
                loading="lazy"
                quality={100}
              />
            </div>

            <div className={styles["content-info-payment"]}>
              <div className={styles["content-first-section-payment"]}>
                <span className={styles["info-payment-condition"]}>
                  {data.item.condition} - {data.item.sold_quantity} vendidos
                </span>

                <h3 className={styles["info-payment-title"]}>
                  {data.item.title}
                </h3>
              </div>

              <div>
                <h1 className={styles["content-info-price"]}>
                  {data.item.price.amount.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </h1>
              </div>

              <button className={styles.button}>Comprar</button>
            </div>
            {!!data.item.description.length ? (
              <div className={styles["content-info-description"]}>
                <h1 className={styles["content-info-price"]}>
                  Descripción del producto
                </h1>

                <p>{data.item.description}</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsProduct;
