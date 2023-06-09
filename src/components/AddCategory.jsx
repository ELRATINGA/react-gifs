import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategorie }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmitNotReloy = (even) => {
        even.preventDefault();
        const cleanInput = inputValue.trim();
        
        if (cleanInput <= 1) return;
        
        console.log('XDD')
      //setCategories(categories => [ ...categories, inputValue ]);
      //setCategories([ ...categories, 'Dead by Deadlight' ] ); Esta solo funciona si en los props le mando 'categories'.

        onNewCategorie(cleanInput);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmitNotReloy } aria-label='form'> {/*También se puede poner en 'onSubmitNotReloy' '(even) => onSubmitNotReloy(even)'*/}

        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange } // Otra manera de hacerlo '(evento) => onInputChange(evento)'
        />   
        
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategorie: PropTypes.func.isRequired,
}