import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  //cat params url
  console.log("🚀 ~ GET ~ request:", request.nextUrl.searchParams);
  const greeting = "Hello World!!";

  const json = {
    greeting,
  };

  return NextResponse.json(json);
}
