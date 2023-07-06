import { toast } from "react-toastify";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  console.log(hex);

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      } catch (error) {
        toast.error("color not copied to clipboard");
      }
    } else {
      toast.error("clipboard not found");
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
