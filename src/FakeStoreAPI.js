async function getAllData() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
}

async function getAllCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = await res.json();
  return data;
}

async function getAllFromCategory(category) {
  const res = await fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  );
  const data = await res.json();
  return data;
}

export { getAllData, getAllCategories, getAllFromCategory };
