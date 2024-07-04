import { useState } from "react";
import './App.css';
import { AddCategory, GifGrid } from "./components";
import { categories as cats } from "./data";

function App() {

  const [categories, setCategories] = useState(cats);

  return (
    <>
      <h2>Gif's App</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      {Boolean(categories.length) && categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))
      }
    </>
  );
}

export default App;
