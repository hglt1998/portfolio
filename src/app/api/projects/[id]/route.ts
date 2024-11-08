import notion from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: { id: string } }) {
  const { NOTION_DATABASE_ID } = process.env

  if (!NOTION_DATABASE_ID) {
    return NextResponse.json({
      message: "Missing notion database id"
    }, {
      status: 500
    })
  }

  try {
    const response = await notion.pages.retrieve({ page_id: params.id })

    return NextResponse.json({
      data: response
    }, {
      status: 200
    })
  } catch (error) {
    console.error(error);
  }
}