import Comic from "@/api/marvel/model/comic";

type Props = {
    comics: Comic[];
};

const Component = ({ comics }: Props) => {
    return <p>"CharacterId: {comics.length}"</p>
};

export default Component;