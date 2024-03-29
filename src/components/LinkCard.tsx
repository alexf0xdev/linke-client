import { useState } from "react";
import { cn } from "@/lib/utils";
import { TbCheck, TbCopy, TbTrash } from "react-icons/tb";
import { ILink } from "@/interfaces/link";
import { useLinksStore } from "@/store/links";

const LinkCard = ({ link }: { link: ILink }) => {
  const [copied, setCopied] = useState(false);

  const { removeLink } = useLinksStore();

  const handleCopy = async (short: string) => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/${short}`,
    );

    setCopied(true);

    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      key={link.id}
      className={cn(
        "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-zinc-800 p-5",
      )}
    >
      <div>
        <h3
          className={cn("text-base md:text-xl font-semibold cursor-pointer")}
          onClick={() => handleCopy(link.short)}
        >
          {process.env.NEXT_PUBLIC_CLIENT_URL}/{link.short}
        </h3>
        <p className={cn("text-base")}>Перенаправляет на {link.longUrl}</p>
      </div>
      <div className={cn("flex gap-2")}>
        <button
          className={cn("flex bg-zinc-700 p-2")}
          onClick={() => handleCopy(link.short)}
        >
          {!copied ? (
            <TbCopy className={cn("w-6 h-6")} />
          ) : (
            <TbCheck className={cn("w-6 h-6")} />
          )}
        </button>
        <button
          className={cn("flex bg-zinc-700 p-2")}
          onClick={() => removeLink(link.id)}
        >
          <TbTrash className={cn("w-6 h-6")} />
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
