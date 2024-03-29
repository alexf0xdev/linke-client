import { cn } from "@/lib/utils";
import { ILink } from "@/interfaces/link";
import LinkCard from "@/components/LinkCard";

const Links = ({ links }: { links: ILink[] }) => {
  return (
    <div className={cn("flex flex-col gap-2 mt-2")}>
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
};

export default Links;
