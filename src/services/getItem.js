
const getItem = async (id) => {
  try {
      const res = await fetch('/productsAPI.json');
      let data = await res.json();
      
      data = data.find(element => Number(element.id) === id);

      return new Promise ((resolve, reject) => {
          setTimeout(() => {
              resolve(data);
          }, 2000);
      })
  } catch (error) {
    console.log(error);
  }
}

export default getItem;
