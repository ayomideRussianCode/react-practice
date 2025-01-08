import { useEffect, useState } from "react";

function Api() {
  const [joke, setJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  function generateJoke() {
    setShowPunchline(false);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
      });

    setTimeout(() => {
      setShowPunchline(true);
    }, 2000);
  }
  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Random Joke: </h2>
          <p>Joke: {joke.setup}</p>
          {showPunchline && <p> Punchline: {joke.punchline}</p>}
          <hr />
          <button onClick={generateJoke}>Click and Laugh!</button>
        </div>
      </div>
    </>
  );
}
export default Api;
