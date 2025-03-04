import { StarIcon } from "../../icons/StarIcon";

interface CardProps {
  title: string;
  location: string;
  stars: number;
}

export function Card({ title, location, stars }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="mb-2">{location}</p>
      <div className="flex">
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon key={`${location}-star-icon-${i}`} />
        ))}
      </div>
    </div>
  );
}
