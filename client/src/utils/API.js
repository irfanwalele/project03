import axios from "axios";
// var client = require('guidebox')
// var Guidebox = new client(process.env.REACT_APP_GUIDEBOX_API_KEY);

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getMovies: function () {
    //  return Guidebox.movies.list();
    return "Here"
  },
  rapidAPI: function (movie) {
    return axios({
      method: "GET",
      url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+movie.replace(" ", "%20")+"&country=us",
      headers: {
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": "ad473768b5msh113bf54ba4e93dfp10e518jsnd4078867b535"
      }
    })
  },
  getRandomDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function (breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
