import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, firstName } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_API_SERVER; // e.g. "us21"

  if (!apiKey || !audienceId || !server) {
    console.error("Mailchimp env vars not configured.");
    return NextResponse.json(
      { error: "Signup is temporarily unavailable." },
      { status: 503 }
    );
  }

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
      ...(firstName ? { merge_fields: { FNAME: firstName } } : {}),
    }),
  });

  const data = await response.json();

  // 400 with "Member Exists" is still a success from the user's perspective
  if (response.ok || data.title === "Member Exists") {
    return NextResponse.json({ success: true });
  }

  console.error("Mailchimp error:", data);
  return NextResponse.json(
    { error: data.detail || "Could not subscribe. Please try again." },
    { status: 400 }
  );
}
