import { cn } from "@/lib/utils";
import { useLinksStore } from "@/store/links";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  url: z
    .string({ required_error: "Укажите ссылку" })
    .min(1, { message: "Укажите ссылку" })
    .url({ message: "Неверная ссылка" }),
});

type Schema = z.infer<typeof schema>;

const ShortLinkForm = () => {
  const { addLink } = useLinksStore();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    defaultValues: {
      url: "https://",
    },
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: Schema) => {
    await addLink(data.url);
    reset();
  };

  return (
    <form className={cn("mt-10")} onSubmit={handleSubmit(onSubmit)}>
      <div className={cn("sm:flex w-full")}>
        <input
          className={cn(
            "block bg-zinc-800 placeholder-zinc-500 px-5 py-3 w-full focus:outline-none",
          )}
          placeholder="Введите ссылку..."
          {...register("url")}
        />
        <button
          className={cn(
            "flex items-center justify-center bg-orange-600 px-5 py-3 w-full sm:w-auto disabled:bg-zinc-700",
          )}
          disabled={isSubmitting}
        >
          {!isSubmitting ? "Сократить" : "Сокращаем..."}
        </button>
      </div>
      {errors.url && (
        <p className={cn("text-left text-red-500 mt-1")}>
          {errors.url.message}
        </p>
      )}
    </form>
  );
};

export default ShortLinkForm;
