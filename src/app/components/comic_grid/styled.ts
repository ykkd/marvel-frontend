import { List, ListProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const ComicList = styled(List)<ListProps>(({ theme }) => ({
  width: "100%",
  maxWidth: `${theme.breakpoints.values.lg}px`,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  gap: theme.space?.sm,
}));

const Styled = {
  ComicList,
};

export default Styled;
