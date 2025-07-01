import platforms from "../data/platforms";
import genres from "../data/genres";

const useLookUP = (id: number, type: "genre" | "platform") => {
  if (type === "platform") {
    return platforms.find((item) => item.id === id)?.name;
  } else if (type === "genre") {
    return genres.find((item) => item.id === id)?.name;
  }
  return null;
};
export default useLookUP;
