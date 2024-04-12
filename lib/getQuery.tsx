export async function searchData(q: string) {
  const result = await fetch(
    `https://dummyjson.com/products/search?q=${q}`
  ).then((d) => d.json());
  console.log(result);
}
