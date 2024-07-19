import { useEffect } from "react";

interface UseCloseOnOutClick {
  onClose: VoidFunction;
  noCloseDataId: string;
}

export const useCloseOnOutClick = ({
  noCloseDataId,
  onClose,
}: UseCloseOnOutClick) => {
  useEffect(() => {
    const onBodyClick = (e: MouseEvent) => {
      if (
        !(e.target as HTMLElement).closest(`[data-no-close=${noCloseDataId}]`)
      ) {
        onClose();
      }
    };
    window.document.body.addEventListener("click", onBodyClick);
    return () => {
      window.document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
};
