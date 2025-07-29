import Image from "next/image";
import Link from "next/link";
interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}
const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    //article is div that contains something together
    <article
      className="companion-card"
      style={{ backgroundColor: color }} //since we have to apply the colors dynamically we have to pass the inline style
    >
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>
      <h2 className="text-2xl font-semibold ">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} mins </p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary justify-center bg-black w-full">Launch lesson</button>
      </Link>
    </article>
  );
};

export default CompanionCard;
