import { FC } from "react";

export interface ImageBlockProps {
  imageUrl: string;
  onClick: VoidFunction;
}

export const ImageBlock: FC<ImageBlockProps> = ({ imageUrl, onClick }) => {
  return (
    <img
      src={imageUrl}
      alt=""
      className="w-full h-48 lg:h-72 object-contain m-auto cursor-pointer shadow-lg"
      onClick={onClick}
    />
  );
};
