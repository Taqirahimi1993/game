import { Image, ImageProps } from "@chakra-ui/react";
import bullsYes from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumb from "../assets/thumbs-up.webp";
interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumb, alt: "Recommanded", boxSize: "25px" },
    5: { src: bullsYes, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji;
