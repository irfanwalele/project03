// https://www.npmjs.com/package/guidebox
// https://www.guidebox.com/docs/libraries#node
// https://www.guidebox.com/docs#introduction



import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};


