import { useApp } from "../../../AppContext";

export default function ImageButton({ src }: { src: string }) {
  const { setMainModal } = useApp();

  return (
    <div
      className="image-border cursor-pointer"
      onClick={() => setMainModal(src)}
    >
      <img src={src}></img>
    </div>
  );
}
