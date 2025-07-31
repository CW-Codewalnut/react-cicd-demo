import { useEffect, useState } from "react";

const App = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (joke || loading)return;
    setLoading(true);
    // Fetch a joke from the joke API
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch(() => {
        setJoke("Couldn't fetch a joke, sorry!");
        setLoading(false);
      });

    }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">CI/CD React Demo</h1>
        <p className="text-lg mb-6">{ loading ? "Loading..." : joke }</p>
        <p className="text-lg mb-6"> Deployed: 31-07-2025 4:15 PM </p>
    </div>
  );
};

export default App;
