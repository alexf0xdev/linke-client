import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

const NotFound = () => {
  return (
    <div
      className={cn("flex flex-col items-center justify-center min-h-screen")}
    >
      <h1 className={cn("text-4xl font-semibold")}>Ссылка не найдена ;(</h1>
      <p className={cn("mt-5")}>Короткая ссылка не найдена или удалена...</p>
    </div>
  );
};

export default NotFound;
