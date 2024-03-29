import { cn } from "@/lib/utils";
import ShortLinkForm from "@/components/ShortLinkForm";

const Hero = () => {
  return (
    <div className={cn("text-center mt-64")}>
      <h1 className={cn("text-4xl sm:text-5xl font-semibold")}>
        Сокращатель ссылок
      </h1>
      <p className={cn("sm:text-2xl mt-5")}>
        Сократи ссылку, если она слишком большая
      </p>
      <ShortLinkForm />
    </div>
  );
};

export default Hero;
