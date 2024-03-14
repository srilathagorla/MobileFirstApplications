import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import './index.css'

const Homepage = ({ onLogout }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      const data = await response.json();
      setJokes(data.jokes);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  const handleLogout = () => {
    onLogout(); 
  };

  return (
    <Container className="w-90 h-80">
      <h2 className="heading">Jokes</h2>
      {isLoading && (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <table className="table table-bordered w-80 gap">
        <thead>
          <tr className="gap th">
            <th >ID</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody className="gap table">
          {jokes.map((joke, index) => (
            <tr key={joke.id} className="text-start gap th">
              <td className="p-3 gap ">{index + 1}. </td>
              <td className="p-3 gap"> {joke.joke} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex gap-3 justify-content-center mb-4">
        <Button
          variant="primary"
          type="button"
          className="mr-3 button"
          onClick={fetchJokes}
        >
          Fetch jokes
        </Button>
        <Button  className='button'
        variant="danger" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default Homepage;