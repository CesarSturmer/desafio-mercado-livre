import React from "react";
import DetailsProduct from "@/components/DetailsProduct";

async function getDetailsProduct(idProduct: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/items/${idProduct}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data details");
    }

    return res.json();
  } catch (error) {
    console.error("There was an error fetching the product details", error);
    return null;
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await getDetailsProduct(params.id);

  return (
    <>
      <DetailsProduct data={response} />
    </>
  );
}
