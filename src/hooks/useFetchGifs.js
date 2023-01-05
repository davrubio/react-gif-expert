import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => { // promesa
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

  useEffect(()=> { //el useEffect no puede contener promesas solo funciones
    getImages();
  }, [])

  return {
    images,
    isLoading
  }
}
