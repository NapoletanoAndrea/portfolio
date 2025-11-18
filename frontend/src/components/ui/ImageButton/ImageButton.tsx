import { useApp } from "../../../AppContext";

export default function ImageButton({ src }: { src: string }) {
  const { setMainModal } = useApp();

  return (
    <div
      className="image-border flex cursor-pointer justify-center"
      onClick={() => setMainModal(src)}
    >
      <img src={src}></img>
    </div>
  );
}
