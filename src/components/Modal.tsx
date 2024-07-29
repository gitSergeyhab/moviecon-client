import { FC, PropsWithChildren, useEffect } from "react";
import { CrossIcon } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="rounded-lg shadow-lg relative  max-w-3xl  mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {hasCrossBtn && (
          <button
            onClick={onClose}
            type="button"
            className="absolute right-[-16px] top-[-16px] rounded-full bg-slate-200 dark:bg-slate-800 hover:text-neutral-500 rotate-45 duration-300"
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
