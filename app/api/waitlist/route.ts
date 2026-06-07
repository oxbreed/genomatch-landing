import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return NextResponse.json(
      { error: "Waitlist is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const supabase = createClient(url, key);
  const { error } = await supabase.from("waitlist_signups").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "Could not join the waitlist. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
