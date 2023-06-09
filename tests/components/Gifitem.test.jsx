import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Gifitem', () => { 
    
    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifItem key={1} title="Genshin" url="xd" id={1} /> )

        expect( container ).toMatchSnapshot();
     });

     test('Debe mostrar la imagen y el ALT indicado', () => { 
        render( <GifItem key={1} title="Genshin" url="http://localhost//xd" id={1} /> )
        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( 'http://localhost//xd' );
        expect( alt ).toBe( 'Genshin' );
      })
 })