import notion from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { NOTION_DATABASE_ID } = process.env

  if (!NOTION_DATABASE_ID) {
    return NextResponse.json({
      message: "Missing notion database id"
    }, {
      status: 500
    })
  }

  try {
    const response = await notion.pages.retrieve({ page_id: id })

    return NextResponse.json({
      data: response
    }, {
      status: 200
    })
  } catch (error) {
    return NextResponse.json({
      message: "Error retrieving project",
      error: error instanceof Error ? error.message : "Unknown error"
    }, {
      status: 500
    })
  }
}