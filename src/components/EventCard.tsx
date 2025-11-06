import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  link: string;
}

export const EventCard = ({ title, date, image, link }: EventCardProps) => {
  return (
    <Link
      to={link}
      className="block focus:outline-none focus:ring-0"
    >
      <div
        className="
          smartphone-frame
          w-[350px]
          transition-all duration-300 
          ease-[cubic-bezier(0.22,1,0.36,1)]
          rounded-2xl
          overflow-visible

          hover:w-[550px]
          hover:-translate-y-3
          hover:shadow-2xl
        "
      >
        <div className="relative w-full h-[600px] overflow-hidden rounded-2xl bg-secondary">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300"
          />

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-5xl font-semibold mb-1 line-clamp-2">
              {title}
            </h3>
            <p className="text-lg text-accent">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
