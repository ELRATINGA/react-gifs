import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

import { renderHook, waitFor } from '@testing-library/react';

describe('Prueba en useFetchGifs', () => { 
    
    test('Debe regresar el estado inicial', () => { 
        
        const { result } = renderHook( () => useFetchGifs('Genshin') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     });

     test('Debe de retonar un arreglo y el isLoading en true', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('Genshin') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
      });

 });