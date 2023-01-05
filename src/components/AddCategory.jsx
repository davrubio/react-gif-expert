import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => { // se desestructura la props

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <=1) return; // si el largo del input es menor o igual a 1 no ingresa
        // setCategories(categories => [inputValue, ...categories]); // se hace un callback a todas las categorias junto con el inputValue para desestructurarlo
        onNewCategory(inputValue.trim());
        setInputValue(''); //es para resetar el input 
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChanged}
        />
    </form>
  )
};
