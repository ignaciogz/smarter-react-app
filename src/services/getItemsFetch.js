
const getItems = async () => {
  try {
      const res = await fetch('/productsAPI.json');
      const data = await res.json();

      return new Promise ((resolve) => {
          setTimeout(() => {
              resolve(data);
          }, 2000);
      })
  } catch (error) {
    console.log(error);
  }
}

export default getItems;
