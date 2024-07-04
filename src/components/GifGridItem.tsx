
import 'animate.css';
interface GifGridItemProps {
  id: string;
  title: string;
  url: string;
}

export const GifGridItem = ({ url, title }: GifGridItemProps) => {
  return (
    <div
      className="card animate__animated animate__fadeIn animate__delay-2s"
    >
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
