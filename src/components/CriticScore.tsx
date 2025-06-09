import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={1.5} borderRadius={3}>
      {score}
    </Badge>
  );
};

export default CriticScore;
