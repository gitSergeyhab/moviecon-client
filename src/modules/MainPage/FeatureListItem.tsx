import FrameIcon from "@/components/icons/frame";
import { SecondaryText } from "@/components/ui/text";
import { FC } from "react";

export interface FeatureListItemProps {
  feature: string;
  description: string;
}

export const FeatureListItem: FC<FeatureListItemProps> = ({
  feature,
  description,
}) => (
  <li className="flex gap-4">
    <FrameIcon className="min-w-6 w-6" />
    <SecondaryText>
      <span className="font-bold">{feature}</span> {description}
    </SecondaryText>
  </li>
);
