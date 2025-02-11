import Comic from "@/api/marvel/model/comic";
import Component from "./component";

const ComicsGrid = ({
  comics,
  lastItemRef,
}: {
  comics: Comic[];
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  return <Component comics={comics} lastItemRef={lastItemRef} />;
};

export default ComicsGrid;
