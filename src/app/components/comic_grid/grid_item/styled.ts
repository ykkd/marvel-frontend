import { ThumbSize } from "@/consts/constants";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GridItemArea = styled(Box)<BoxProps>(
    ({theme}) => ({
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: theme.radius?.sm,
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
            transform: "scale(0.95)",
        },
    })
);

const ItemLink = () => ({
    textDecoration: "none",
});

const CharacterImage = styled(LazyLoadImage)(({theme}) => ({
    width: `${ThumbSize.xs.width}px`,
    height: `${ThumbSize.xs.height}px`,
    objectFit: "cover",
    [theme.breakpoints.up("sm")]: {
        width: `${ThumbSize.sm.width}px`,
        height: `${ThumbSize.sm.height}px`,
    },
}));

const CharacterName = styled(Typography)<TypographyProps>(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: theme.spacing(0.5, 0),
    fontSize: theme.typography.body2.fontSize,
}));

const CharacterImageWrapper = styled("div")({
    position: "relative",
    width: "100%",
    overflow: "hidden",
    aspectRatio: "1 / 1",
});

const Styled = {
    GridItemArea,
    ItemLink,
    CharacterImage,
    CharacterName,
    CharacterImageWrapper,
};

export default Styled;