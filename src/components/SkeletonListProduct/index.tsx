import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import stylesShared from "../../styles/shared/items/styles.module.css";

const SkeletonListProduct = () => {
  return (
    <div className={stylesShared["wrapper"]}>
      <div className={stylesShared["wrapper-card"]}>
        <div className={stylesShared["content-card"]}>
          <div className={stylesShared["content-card-items"]}>
            <div className={stylesShared.img}>
              <Skeleton width={180} height={180} />
            </div>
            <div className={stylesShared["info-price"]}>
              <Skeleton height={29} />
              <Skeleton height={42} />
            </div>
          </div>
          <Skeleton height={1} />
        </div>
        <div className={stylesShared["content-card"]}>
          <div className={stylesShared["content-card-items"]}>
            <div className={stylesShared.img}>
              <Skeleton width={180} height={180} />
            </div>
            <div className={stylesShared["info-price"]}>
              <Skeleton height={29} />
              <Skeleton height={42} />
            </div>
          </div>

          <Skeleton height={1} />
        </div>
        <div className={stylesShared["content-card"]}>
          <div className={stylesShared["content-card-items"]}>
            <div className={stylesShared.img}>
              <Skeleton width={180} height={180} />
            </div>
            <div className={stylesShared["info-price"]}>
              <Skeleton height={29} />
              <Skeleton height={42} />
            </div>
          </div>
          <Skeleton height={1} />
        </div>
        <div className={stylesShared["content-card"]}>
          <div className={stylesShared["content-card-items"]}>
            <div className={stylesShared.img}>
              <Skeleton width={180} height={180} />
            </div>
            <div className={stylesShared["info-price"]}>
              <Skeleton height={29} />
              <Skeleton height={42} />
            </div>
          </div>
          <Skeleton height={1} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonListProduct;
