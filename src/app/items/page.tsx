"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FormattedData } from "@/types/responseItems/index.type";
import ListProducts from "@/components/ListProducts";
import stylesShared from "../../styles/shared/items/styles.module.css";
import SkeletonListProduct from "@/components/SkeletonListProduct";

async function getProduct(query: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/items?q=${query}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.json();
}

export default function ProductItems() {
  const [listProduct, setListProduct] = useState<FormattedData | null>(null);

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    let ignore = false;
    setListProduct(null);
    setLoading(false);

    if (!ignore) {
      const getData = async () => {
        setLoading(true);
        if (query) {
          try {
            const res = await getProduct(query);

            if (res) {
              setListProduct(res);
              window.localStorage.setItem("categories", res.categories);
            }
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
      };

      getData();
    }

    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <>
      {loading ? (
        <SkeletonListProduct />
      ) : (
        <>{listProduct !== null && <ListProducts data={listProduct} />}</>
      )}
    </>
  );
}
