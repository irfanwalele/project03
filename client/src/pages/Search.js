import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm"
import Alert from "../components/Alert";
import Hero from "../components/Hero";
import smoothscroll from "../utils/smoothScrollFunction";
import "./style.css";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    // API.getBaseBreedsList()
    //   .then(res => this.setState({ breeds: res.data.message }))
    //   .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value }, () => console.log(this.state));
  };

  handleFormSubmit = event => {
    event.preventDefault();
  

    
    var results = document.getElementById("results").offsetTop;
    // var startPoint = 
    smoothscroll(document.documentElement, results, 200);
    
    
    API.rapidAPI(this.state.search)
      .then(res => {
        console.log(res.data.results);
        if (res.data.status_code === 200) {
          this.setState({ results: res.data.results })
        }
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
      <Hero backgroundImage="https://i.ibb.co/XWFKKdd/wp2081147.png">
        <h1>Streamline</h1>
        <h2>Find your entertainment..all streamlined</h2>

      <Container>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          </Container>

        </Hero>
          <div id="results">
          { 
            this.state.results.map((movie, i) => <MovieCard key={i + '-movie'} movie={movie} />)
          }
          </div>
      </div>
    );
  }
}

function MovieCard({ movie }) {
  return (
    <>
      <span><h3> {movie.name} </h3>
      <img src={movie.picture} alt={movie.name} style={{height: '150px', maxWidth: "50%"}} />
     {movie.locations.map(location => {
       return(
      <>
        {/* <h1> {location.display_name} </h1> */}
        <a href={location.url} alt={movie.name} target="blank">
          <img src={location.icon} alt={movie.name}/>
        </a>
      </>
       )
     })}
</span>
    </>
  )
}

export default Search;

