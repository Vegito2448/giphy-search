import { Dispatch, SetStateAction } from "react";
import { GifsResponse } from "../interfaces";

export interface Gif {
  id: string;
  title: string;
  url: string;
}


interface getGifsProps {
  category: string;
  setImages: Dispatch<SetStateAction<Array<Gif>>>;
}

const getGifs = async ({ setImages, category }: getGifsProps): Promise<Gif[] | Error> => {

  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  try {
    const response = await fetch(url);
    const { data } = await response.json() as GifsResponse;

    const gifs = data && data.length ? data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
        id,
        title,
        url,
    })) : [];
    if (gifs && gifs.length > 0)
    setImages(gifs);
    return gifs;

  } catch (error) {
    return error as Error;
  }
};

export {
  getGifs
};

