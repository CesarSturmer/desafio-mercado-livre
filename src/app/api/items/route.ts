import { FormattedData, ResponseItems } from "@/types/responseItems/index.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const options = {
    method: "GET",
    headers: {
      Accept: "aplication/json",
      "Content-type": "aplication/json",
    },
  };

  const returnCategories = (dataCategories: ResponseItems) => {
    if (dataCategories.filters.length > 0) {
      const filteredCategory = dataCategories.filters.filter(
        (filter) => filter.id === "category"
      );

      const dataValuesCategories = filteredCategory.map((item) => item.values);

      const dataPathFromCategories = dataValuesCategories.map(
        (item) => item[0].path_from_root
      );

      const dataNameCategories = dataPathFromCategories[0].map(
        (item) => item.name
      );

      return dataNameCategories;
    }

    return [];
  };

  try {
    const query = request.nextUrl.searchParams;

    const queryValue = query.get("q");

    const size = 4;

    const resApiList = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_MELI}/sites/MLA/search?q=${queryValue}&limit=${size}`,
      options
    );

    if (!resApiList.ok) {
      const errorMessage = `Failed to fetch data from the external API. Status: ${response.status}`;

      return new Response(errorMessage, {
        status: 400,
      });
    }

    const data: ResponseItems = await resApiList.json();
    const formattedData: FormattedData = {
      author: { name: "Cesar", lastname: "Sturmer" },
      categories: returnCategories(data),

      items: data.results.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: (item.price % 1).toFixed(2),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping?.free_shipping || false,
      })),
    };

    return NextResponse.json(formattedData);
  } catch (error: any) {
    console.error(error);
    return new Response(`${error.message}`, {
      status: 500,
    });
  }
}
