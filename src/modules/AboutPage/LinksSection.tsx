import { FC } from "react";
import { PrimaryText, SecondaryHeader } from "@/components/ui/text";
import { myLinks, sourceLinks } from "./const";

import { AppAnchorWithIcon } from "@/components/ui/AppAnchorWithIcon";

export const LinksSection: FC = () => {
  return (
    <section className="mt-auto flex gap-x-8 gap-y-2 flex-wrap flex-col md:flex-row p-1 px-4 md:p-4 border-0 md:border-4 bg-neutral-200 dark:bg-neutral-800 border-neutral-800 dark:border-neutral-200 rounded-md w-fit m-auto">
      <SecondaryHeader className="font-bold">Ссылки:</SecondaryHeader>
      <div className="flex gap-4 items-center">
        <PrimaryText className="font-bold text-sm">Автор</PrimaryText>
        <ul className="flex gap-2">
          {myLinks.map(({ href, icon }) => (
            <li key={href}>
              <AppAnchorWithIcon href={href} blank>
                {icon}
              </AppAnchorWithIcon>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <PrimaryText className="font-bold text-sm">Ресурсы</PrimaryText>
        <ul className="flex gap-2 items-center">
          {sourceLinks.map(({ href, icon, ariaLabel }) => (
            <li key={href}>
              <AppAnchorWithIcon href={href} blank aria-label={ariaLabel}>
                {icon}
              </AppAnchorWithIcon>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
