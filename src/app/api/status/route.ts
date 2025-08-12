export async function GET(request: Request) {
  const sum = 1 + 2;
  return Response.json({ number: sum });
}
