import { useState } from "react"
import Receipes from "./Receipes";
import './app.css';
const App =()=> {


const [search, setSearch] = useState('');
const [recipe, setRecipe] = useState([]);



    const searchPressed = () => {
      fetch(`https://api.edamam.com/search?q=${search}&app_id=${import.meta.env.VITE_KEY}&app_key=${import.meta.env.VITE_PASS}`)
        .then((res) => res.json())
        .then((result) => {
          setRecipe(result.hits);
          console.log(result.hits)
        });
    };
  return (
   <div className="search">
    <div className="receipe">
    <p className="explore"> Explore Receipes</p>
      <input className="input"
      type="text"
      placeholder="Search Receipe"
      onChange={(e)=> setSearch(e.target.value)}
      /><br></br>
      <button className="button" onClick={searchPressed}>Search</button>
</div>
<div>

{recipe.map(recipe => (
    <Receipes
    key ={recipe.recipe.label}
    title ={recipe.recipe.label}
    image = {recipe.recipe.image}
    ingredients = {recipe.recipe.ingredients}
    />
))}
</div>

</div>
    
      
  
  )
}
export default App;
