import { getGifs } from "../../src/helpers/getGifs"

describe('Prueba getGifs', () => { 
    
    test('Debe retornar una API', async() => { 
        const resApi = await getGifs('Genshin');

        expect( resApi.length ).toBeGreaterThan( 0 );
        expect( resApi[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
     })
 })