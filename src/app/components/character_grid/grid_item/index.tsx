import Character from "@/api/marvel/model/character";
import Component from "./component";

const GridItem = ({
  character,
  lastItemRef,
}: {
  character: Character;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  return <Component character={character} lastItemRef={lastItemRef} />;
};

export default GridItem;
