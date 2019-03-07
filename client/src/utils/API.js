import axios from "axios";

export default {
  // Gets all books
  getWines: function() {
    return axios.get("/api/wines");
  },
  // Gets the book with the given id
  getWine: function(id) {
    return axios.get("/api/wines/" + id);
  },
  // Deletes the book with the given id
  deleteWine: function(id) {
    return axios.delete("/api/wines/" + id);
  },
  // Saves a book to the database
  saveWine: function(wineData) {
    return axios.post("/api/wines", wineData);
  },
  
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  // api that gets a random Chuck Norris Joke
  ChuckNorris: function() {
    return axios.get("https://api.icndb.com/jokes/random");
  }
};

