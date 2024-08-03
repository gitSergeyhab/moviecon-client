import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export interface PortalProps extends PropsWithChildren {
  containerId: string;
}

export const Portal: FC<PortalProps> = ({ containerId, children }) =>
  createPortal(children, document.querySelector(containerId)!);
