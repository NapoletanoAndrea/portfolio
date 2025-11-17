import ReactDOM from "react-dom";
import type { ModalProps } from "../../../@types/types";
import Button from "../Button/Button";

interface ImageModalProps extends ModalProps {
  src: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  src = "",
}: ImageModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="bg-bg fixed top-0 left-0 flex h-full w-full overflow-auto p-4">
        <Button onClick={onClose} className="fixed top-4 right-4 font-bold">
          X
        </Button>
        <div className="image-border m-auto max-w-425">
          <img className="" src={src} />
        </div>
      </div>
    </>,

    document.getElementById("modal-root") as any,
  );
}
