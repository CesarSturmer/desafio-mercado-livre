import React from "react";
import { FormattedData } from "@/types/responseItems/index.type";
import ListProducts from "@/components/ListProducts";
import ErrorComponent from "@/components/Error";

async function getProduct(query: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/items?q=${query}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data search, status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("There was an error fetching the search products", error);
    return {
      message: error,
      status: 500,
    };
  }
}

export default async function ProductItems({
  params,
}: {
  params: { search: string };
}) {
  // se começar COM MLA DEVE IR PARA DETALHES
  const response: FormattedData = await getProduct(params.search);

  function validateMLAID() {
    // A expressão regular começa com 'MLA', seguida por exatamente 10 caracteres alfanuméricos.
    // Você pode ajustar o número de caracteres alfanuméricos (\d{10}) conforme necessário.
    const regex = /^MLA\d{10}$/;
    return regex.test(params.search);
  }

  const isID = validateMLAID();
  console.log("🚀 ~ isID:", isID);

  return (
    <>
      {response?.status === 500 ? (
        <ErrorComponent />
      ) : (
        <ListProducts
          data={response}
          isIDsearch={isID}
          search={params.search}
        />
      )}
    </>
  );
}
