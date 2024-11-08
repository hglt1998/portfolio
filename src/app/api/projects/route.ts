import notion from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { NOTION_DATABASE_ID } = process.env

  if (!NOTION_DATABASE_ID) {
    return NextResponse.json({
      message: "Missing notion database id"
    }, {
      status: 500
    })
  }

  try {
    const response = await notion.databases.query({ database_id: NOTION_DATABASE_ID, sorts: [{ property: 'Created', direction: 'ascending', timestamp: 'created_time' }] })

    return NextResponse.json(response.results)
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch data from Notion" }, { status: 500 })
  }
}