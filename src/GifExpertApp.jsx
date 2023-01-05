import {useState} from 'react';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

  /* si se tiene que almacenar informacion y esa info tiene que cambiar el HTML 
  se tiene que usar hooks de react para mantener el estado 'es este caso el useState'*/
  const [categories, setCategories] = useState(['Game of Thrones']); //useStateSnippet
  
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) { // si la categoria ya existe entonces que no ingrese
      return;
    }
    // setcategories(categories.push('Dark')); // push sirve para mutar un arreglo
    setCategories([newCategory, ...categories]); // se puede cambiar el orden para insertar antes o despues
    // otra forma* setcategories(cat => [...cat, 'Dark']);
    // console.log(newCategory);
    
  };

  return (
      <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories={setCategories}
          onNewCategory={(value) => onAddCategory(value)}
        />

        {/* Listado de Gif */}
        {
          categories.map((category) => ( // el map permite barrer cada uno de los elementos del arreglo y regresar algo nuevo
            <GifGrid 
            key={category}
            category = {category}
            />
          ))
        }
      </>
  );
};

