type Props = {
    characterId: string;
};

const Component = ({ characterId }: Props) => {
    return <p>"CharacterId: {characterId}"</p>
};

export default Component;