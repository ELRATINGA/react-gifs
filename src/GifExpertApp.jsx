//03JcQkVM1Ru9S2z6FRdFOQBAfI1O1PAF

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
const [categories, setCategories] = useState([ 'Genshin Impact']) // Es recomendable que tenga un valor inicial pq si se deja solo sería un 'undefind' y puede causar error.

  const onAddCategory = ( newCategory ) => {

    if(categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ]);
    // setCategories( cat => [ ...cat, 'Dead by Deadlight' ] );
  }

  return (
   <>
        <h1>GifExpert App</h1>

        <AddCategory 
            onNewCategorie={ newCategory => onAddCategory(newCategory) } 
        />

        {//El 'key' es obligatorio
            categories.map( category => ( 

              <GifGrid 
                  key={category}
                  category={category}
              />

            ))
        }

   </>
  )
}
