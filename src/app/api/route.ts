import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", service: "State Housing Company Limited API" });
}
