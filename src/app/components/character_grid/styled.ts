import { List, ListProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CharacterList = styled(List)<ListProps>(({ theme }) => ({
    width: "100%",
    maxWidth: `${theme.breakpoints.values.lg}px`,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: theme.space?.sm,
}));

const Styled = {
    CharacterList,
};

export default Styled;