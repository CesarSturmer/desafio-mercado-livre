import { FormattedDataDetails } from "@/types/responseItems/index.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const options = {
    method: "GET",
    headers: {
      Accept: "aplication/json",
      "Content-type": "aplication/json",
    },
  };

  try {
    const responseDetails = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_MELI}/items/${params.id}`,
      options
    ).then((res) => res.json());

    const responseDescription = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_MELI}/items/${params.id}/description`,
      options
    ).then((res) => res.json());

    const [details, description] = await Promise.all([
      responseDetails,
      responseDescription,
    ]);

    const formattedData: FormattedDataDetails = {
      author: { name: "Cesar", lastname: "Sturmer" },
      item: {
        id: details.id,
        title: details.title,
        price: {
          currency: details.currency_id,
          amount: Math.floor(details.price),
          decimals: (details.price % 1).toFixed(2),
        },
        picture: details.pictures[0]?.url || "",
        condition: details.condition,
        free_shipping: details.shipping?.free_shipping || false,
        sold_quantity: details.sold_quantity || 0, // not return api
        description: description.plain_text || "",
      },
    };

    return NextResponse.json(formattedData);
  } catch (error: any) {
    console.error(error);
    return new Response(`${error.message}`, {
      status: 500,
    });
  }
}
