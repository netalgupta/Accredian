import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { leadSchema } from "@/lib/validations";
import { randomUUID } from "crypto";
import type { Lead } from "@/types";

const LEADS_FILE = path.join(process.cwd(), "leads.json");

async function readLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeLeads(leads: Lead[]): Promise<void> {
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// POST /api/leads
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: randomUUID(),
      ...result.data,
      message: result.data.message ?? "",
      createdAt: new Date().toISOString(),
    };

    const leads = await readLeads();
    leads.push(lead);
    await writeLeads(leads);

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("POST /api/leads error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

// GET /api/leads
export async function GET() {
  try {
    const leads = await readLeads();
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (err) {
    console.error("GET /api/leads error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
