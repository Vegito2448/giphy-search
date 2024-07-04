import { Dispatch, SetStateAction } from "react";
import { GifsResponse } from "../interfaces";

interface getGifsProps {
  category: string;
  setImages: Dispatch<SetStateAction<{
    id: string;
    title: string;
    url: string;
  }[]>>;
}

const getGifs = async ({ setImages, category }: getGifsProps) => {

  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  try {
    const response = await fetch(url);
    const { data } = await response.json() as GifsResponse;
    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => {
      return {
        id,
        title,
        url,
      };
    });
    setImages(gifs);

  } catch (error) {
    return error;
  }
};

export {
  getGifs
};

