 export const request = async (name, phone) => {
  const request = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({name, phone}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const res = await request.json();

  if (!request.ok) {
    throw new Error(`${res.message}`)
  }

  return res;
 }