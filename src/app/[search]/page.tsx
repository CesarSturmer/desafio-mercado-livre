import React from "react";
import { FormattedData } from "@/types/responseItems/index.type";
import ListProducts from "@/components/ListProducts";

async function getProduct(query: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/items?q=${query}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data search");
    }

    return res.json();
  } catch (error) {
    console.error("There was an error fetching the search products", error);
    return null;
  }
}

export default async function ProductItems({
  params,
}: {
  params: { search: string };
}) {
  const response: FormattedData = await getProduct(params.search);

  return <ListProducts data={response} />;
}
