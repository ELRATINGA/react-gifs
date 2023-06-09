import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas AddCategory', () => { 
    
    test('Debe de cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewCategorie={ () => {} } />)
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Genshin' } } );

        expect( input.value ).toBe( 'Genshin' );
    });

    test('Debe de llamar al onNewCategories si el input tiene un valor', () => { 
        
        const onNewCategorie = jest.fn();

        render(<AddCategory onNewCategorie={ onNewCategorie } />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Genshin' } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategorie ).toHaveBeenCalled();
        expect( onNewCategorie ).toHaveBeenCalledTimes(1);
        expect( onNewCategorie ).toHaveBeenCalledWith('Genshin')
     });

    test('No debe ser llamada la función onNewCategories si el input está vacío', () => { 
        const onNewCategorie = jest.fn();
        render(<AddCategory onNewCategorie={ onNewCategorie } />)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: '' } } );
        fireEvent.submit( form );

        expect( onNewCategorie ).toHaveBeenCalledTimes(0);
        expect( onNewCategorie ).not.toHaveBeenCalled();

    });

 });