import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  link: string;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

export const EventCard = ({
  title,
  date,
  image,
  link,
  index,
  hovered,
  setHovered,
}: EventCardProps) => {
  return (
    <Link
      to={link}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="focus:outline-none focus:ring-0 block"
    >
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden w-[350px] h-[500px] transition-all duration-300 ease-out border-2 border-neutral-700",

          // non-hovered cards slightly blurred if something else is hovered
          hovered !== null && hovered !== index && "blur-sm scale-[0.96]",

          // hovered card
          hovered === index && "scale-105 border-blue-500"
        )}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div
          className={cn(
            "absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div>
            <h3 className="text-4xl font-semibold">{title}</h3>
            <p className="text-lg text-accent">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
