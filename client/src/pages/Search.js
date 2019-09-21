import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm"
import Alert from "../components/Alert";
import Hero from "../components/Hero";


// import { thisExpression } from "@babel/types";




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
   
        
      <Container style={{ minHeight: "100%" }}>
  

          {/* <h1 className="text-center">Search By Breed!</h1> */}
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
          {
            this.state.results.map((movie, i) => <MovieCard key={i + '-movie'} movie={movie} />)
          }
          
          {/* {
            for(var i = 0; i < this.state.results; i++){
              var movie = this.state.results[i];
              <MovieCard key={i+'-movie'} movie={movie} />
            }
          } */}
        
      </div>
    );
  }
}

function MovieCard({ movie }) {
  return (
    <>
      <h3> {movie.name} </h3>
      <img src={movie.picture} alt={movie.name} style={{height: '100px', maxWidth: "100%"}} />
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

    </>
  )
}

export default Search;

