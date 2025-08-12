test("GET Status code 200", async () => {
  const response = await fetch("http://localhost:3001/api/status");

  expect(response.status).toBe(200);
});
