import { PrimaryText } from "@/components/ui/text";
import { FC } from "react";
import { gameImages } from "./const";
import { ImageBlock } from "./ImageBlock";

const ImagesSection: FC = () => {
  return (
    <section className="flex flex-col gap-10 rounded-lg w-full ">
      <h2 className="invisible h-0">Примеры вопросов, скриншоты</h2>
      <PrimaryText className="text-3xl md:text-5xl font-bold text-center">
        Угадывайте!
      </PrimaryText>
      {gameImages.map(({ image, title, id }) => (
        <ImageBlock key={id} image={image} title={title} id={id} />
      ))}
    </section>
  );
};

export default ImagesSection;
