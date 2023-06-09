import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/Hooks/useFetchGifs';

jest.mock('../../src/Hooks/useFetchGifs');

describe('Pruebas GifGrid', () => { 
    const category = 'Genshin';
    
    test('Debe de mostrar el loading', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

     });

     test('Debe mostrar items cuando se usa el useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Genshin',
                url: 'https://localhost/genshin.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect( screen.getAllByRole )
      });

 });