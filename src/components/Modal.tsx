import { FC, PropsWithChildren, useEffect } from "react";
import { CrossIcon } from "lucide-react";
import { cn } from "@/lib/utils/styles";

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  hasCrossBtn?: boolean;
}

const Modal: FC<ModalProps> = ({ onClose, children, hasCrossBtn }) => {
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.classList.add("overflow-y-hidden");
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <div
      className="fixed bg-black bg-opacity-50 flex items-center justify-center inset-0 z-50"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg shadow-lg max-w-3xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {hasCrossBtn && (
          <button
            aria-label="закрыть модальное окно"
            onClick={onClose}
            type="button"
            className={cn(
              "absolute right-2 top-2 bg-slate-200 dark:bg-slate-800 rotate-45 rounded-full",
              "hover:text-neutral-500 duration-300"
            )}
          >
            <CrossIcon size={20} strokeWidth={4} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
