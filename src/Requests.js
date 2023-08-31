const myApi = process.env.REACT_APP_API_KEY

const requests = {
  requestChicken : `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApi}&query=pizza&number=10`,
  baseURL : `https://api.spoonacular.com/recipes/?apiKey=${myApi}&query=pizza&number=10`
}

export default requests;