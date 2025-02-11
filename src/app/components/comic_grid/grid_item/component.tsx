import Styled from "./styled";
import Comic from "@/api/marvel/model/comic";

const Component = ({ 
    comic,
    lastItemRef,
}: { 
    comic: Comic;
    lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
    return (
        <Styled.GridItemArea ref={lastItemRef}>
            <Styled.CharacterImageWrapper>
                <Styled.CharacterImage src={comic.thumbnail.path + '/standard_fantastic' + '.' + comic.thumbnail.extension} alt={comic.title ?? ""} />
                <Styled.CharacterName>{comic.title}</Styled.CharacterName>
            </Styled.CharacterImageWrapper>
        </Styled.GridItemArea>
    );
};

export default Component;