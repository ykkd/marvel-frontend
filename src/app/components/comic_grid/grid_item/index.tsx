import Component from "./component";
import Comic from "@/api/marvel/model/comic";

const GridItem = ({
  comic,
  lastItemRef,
}: {
  comic: Comic;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  return <Component comic={comic} lastItemRef={lastItemRef} />;
};

export default GridItem;
