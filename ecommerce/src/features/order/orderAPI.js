export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers:{'content-type':'application/json'},
    });
    const data = await response.json();
    //TODO: only few info of user will return on server
    resolve({ data });
  }
  );
}