import React from "react";
import DetailsProduct from "@/components/DetailsProduct";
import ErrorComponent from "@/components/Error";

async function getDetailsProduct(idProduct: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/items/${idProduct}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data details, status: ${res.status} `);
    }

    return res.json();
  } catch (error) {
    console.error("There was an error fetching the product details", error);
    return {
      message: error,
      status: 500,
    };
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
      {response.status === 500 ? (
        <ErrorComponent />
      ) : (
        <DetailsProduct data={response} />
      )}
    </>
  );
}
