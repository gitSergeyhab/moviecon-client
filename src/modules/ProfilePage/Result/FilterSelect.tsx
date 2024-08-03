import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Option } from "@/type/option";
import { FC } from "react";

interface FilterSelectProps {
  options: Option[];
  onValueChange: (value: string) => void;
  value: string;
}
export const FilterSelect: FC<FilterSelectProps> = ({
  onValueChange,
  options,
  value,
}) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
