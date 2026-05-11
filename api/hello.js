export async function GET() {
  return Response.json({
    success: true,
    message: "Hello from Vercel!",
    time: new Date().toISOString(),
  });
}