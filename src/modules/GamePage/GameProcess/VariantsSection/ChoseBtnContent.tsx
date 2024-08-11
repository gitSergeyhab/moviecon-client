import { FC, PropsWithChildren } from "react";
import { Check } from "lucide-react";
import { PrimaryBlock } from "../../PrimaryBlock";
import { PaleText } from "@/components/ui/text";
import { VariantId } from "@/type/game";

export interface ChoseBtnContentProps extends PropsWithChildren {
  primary: VariantId;
  secondary: VariantId;
  enName: VariantId;
}

export const ChoseBtnContent: FC<ChoseBtnContentProps> = ({
  primary,
  enName,
  secondary,
}) => {
  if (!primary) return <Check size={24} />;
  return (
    <>
      {!!primary && <PrimaryBlock text={primary} enText={enName} />}
      {!!secondary && (
        <PaleText className="italic max-w-full text-center whitespace-normal">
          {secondary}
        </PaleText>
      )}
    </>
  );
};
