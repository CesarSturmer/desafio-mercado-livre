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
    );
    const responseDescription = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_MELI}/items/${params.id}/description`,
      options
    );

    const dataDetails = await responseDetails.json();
    const dataDescription = await responseDescription.json();

    const formattedData: FormattedDataDetails = {
      author: { name: "Cesar", lastname: "Sturmer" },
      item: {
        id: dataDetails.id,
        title: dataDetails.title,
        price: {
          currency: dataDetails.currency_id,
          amount: Math.floor(dataDetails.price),
          decimals: (dataDetails.price % 1).toFixed(2),
        },
        picture: dataDetails.pictures[0]?.url || "",
        condition: dataDetails.condition,
        free_shipping: dataDetails.shipping?.free_shipping || false,
        sold_quantity: dataDetails.sold_quantity || 0, // not return api
        description: dataDescription.plain_text || "",
      },
    };

    return NextResponse.json(formattedData);
  } catch (error: any) {
    console.error(error);
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
}
