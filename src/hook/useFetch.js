export async function getItem(
  url = "https://fakestoreapi.com/products?limit=5"
) {
  let res = await fetch(url);
  let items = await res.json();
  return items;
}

export async function getSigngleItem(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const item = await res.json();
  return item;
}
