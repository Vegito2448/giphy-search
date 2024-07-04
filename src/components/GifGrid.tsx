import { useFetch } from "../hooks";
import { GifsResponse } from "../interfaces";
import { GifGridItem } from "./GifGridItem";

interface GifGridProps {
  category: string;
}
export const GifGrid = ({ category }: GifGridProps) => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

  const { data, loading } = useFetch<GifsResponse>({ url });

  const images = data?.data;

  return (
    <>
      <h3
        className="animate__animated animate__fadeIn animate__delay-2s"
      >{category}</h3>
      <div
        className="card-grid animate__animated animate__fadeIn animate__delay-2s"
      >
        {loading && <p
          className="animate__animated animate__flash animate__infinite animate__slower"
        >Loading...</p>}
        {!loading && images && Boolean(images.length) && <ol className="card-grid" >
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>}
      </div >
    </>
  );
};
