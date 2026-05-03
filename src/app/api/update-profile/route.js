import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(req) {
  try {
  
    const currentHeaders = await headers();


    const session = await auth.api.getSession({
      headers: currentHeaders,
    });

    if (!session) {
      return Response.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

  
    const { name, image } = await req.json();


    await auth.api.updateUser({
      headers: currentHeaders,
      body: {
        name,
        image,
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("API Update Error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}