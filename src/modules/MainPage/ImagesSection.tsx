import { PrimaryText } from "@/components/ui/text";
import { FC } from "react";
import { gameImages } from "./const";
import { ImageBlock } from "./ImageBlock";

const ImagesSection: FC = () => {
  return (
    <section className="flex flex-col w-full gap-10 rounded-lg">
      <h2 className="invisible h-0">Примеры вопросов, скриншоты</h2>
      <PrimaryText className="text-3xl font-bold text-center md:text-5xl">
        Угадывайте!
      </PrimaryText>
      {gameImages.map(({ image, title, id }) => (
        <ImageBlock key={id} image={image} title={title} id={id} />
      ))}
    </section>
  );
};

export default ImagesSection;
