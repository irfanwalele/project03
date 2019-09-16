import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm"
import Alert from "../components/Alert";
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
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
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
          {
            this.state.results.map((movie, i) => <MovieCard key={i + '-movie'} movie={movie} />)
          }
          {/* {
            for(var i = 0; i < this.state.results; i++){
              var movie = this.state.results[i];
              <MovieCard key={i+'-movie'} movie={movie} />
            }
          } */}
        </Container>
      </div>
    );
  }
}

function MovieCard({ movie }) {
  return (
    <>
      <h1> {movie.name} </h1>
      <img src={movie.picture} alt={movie.name} style={{height: '250px', maxWidth: "100%"}} />
      <h1> {movie.locations[0].display_name} </h1>
    </>
  )
}

export default Search;
