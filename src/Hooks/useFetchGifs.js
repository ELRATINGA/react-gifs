import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImgs = async () => {

        const newImgs = await getGifs(category);
        setImgs( newImgs );
        setIsLoading(false);
    }

    useEffect( () => {
        getImgs()
    }, []);

    return {
        //Tambien se puede poner images: images <= (esta hace referencia a la variable que está en useState)
        images,
        isLoading,
    }

}
