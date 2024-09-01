import { TitleText } from "@/components/ui/text";
import { cn } from "@/lib/utils/styles";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
interface IImageBlockProps {
  image: string;
  title: string;
  id: number;
}
export const ImageBlock: FC<IImageBlockProps> = ({ image, title }) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <div className="w-full " ref={ref}>
      <TitleText
        className={cn(
          "text-center py-4 md:py-6 opacity-50 scale-50",
          inView ? "animate-shadowsUp" : ""
        )}
      >
        {title}
      </TitleText>
      <img
        src={`${image}.webp`}
        srcSet={`${image}-tablet.webp 768w, ${image}.webp 1024w`}
        loading="lazy"
        width={1145}
        height={700}
        alt={title}
        className={cn(
          "m-auto w-full text-center overflow-hidden rounded-lg shadow-2xl md:w-[90%]",
          "transition-opacity opacity-0 duration-1000 transform-gpu",
          inView ? "opacity-100 scale-100" : ""
        )}
      />
    </div>
  );
};
