import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import stylesShared from "../../styles/shared/detailItem/styles.module.css";

const SkeletonDetailProduct = () => {
  return (
    <div className={stylesShared["wrapper"]}>
      <div className={stylesShared["wrapper-card"]}>
        <div className={stylesShared["content-img"]}>
          <Skeleton height={500} width={680} />
        </div>

        <div className={stylesShared["content-info-payment"]}>
          <div className={stylesShared["content-first-section-payment"]}>
            <span className={stylesShared["info-payment-condition"]}>
              <Skeleton height={18} />
            </span>
            <h3 className={stylesShared["info-payment-title"]}>
              <Skeleton height={175} />
            </h3>
          </div>
          <div>
            <h1 className={stylesShared["content-info-price"]}>
              <Skeleton height={60} />
            </h1>
          </div>

          <Skeleton height={48} />
        </div>
        <div className={stylesShared["content-info-description"]}>
          <h1 className={stylesShared["content-info-price"]}>
            <Skeleton height={48} />
          </h1>

          <Skeleton height={200} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetailProduct;
