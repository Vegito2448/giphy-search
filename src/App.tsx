import { useState } from "react";
import './App.css';
import { GifGrid } from "./components";
import { AddCategory } from './components/AddCategory';
import { categories as cats } from "./data";

function App() {

  const [categories, setCategories] = useState(cats);

  return (
    <>
      <h2>Gif's App</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      {Boolean(categories.length) && categories.map((category, index) => (
        <GifGrid category={category} key={index + category} />
      ))
      }



    </>
  );
}

export default App;
