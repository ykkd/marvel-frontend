import Comic from "@/api/marvel/model/comic";
import ComicsGrid from "@/app/components/comic_grid";

type Props = {
    comics: Comic[];
    lastItemRef: (node: HTMLDivElement | null) => void;
};

const Component = ({ comics, lastItemRef }: Props) => {
    return <ComicsGrid 
        comics={comics ?? []}
        lastItemRef={lastItemRef} 
    />
};

export default Component;