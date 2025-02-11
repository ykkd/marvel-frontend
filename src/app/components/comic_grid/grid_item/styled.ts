// styled.ts
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GridItemArea = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  maxHeight: "324px",
  gap: theme.space?.sm,
}));

const ComicInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,                  
}));

const ComicImageContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  height: "100%",
}));

const ComicImage = styled(LazyLoadImage)(({ theme }) => ({
  width: "100%",
  objectFit: "contain",
  aspectRatio: 216 / 324,      // portrait_incredible利用 ref:https://developer.marvel.com/documentation/images
  borderRadius: theme.radius?.sm,
}));

const ComicTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const ComicDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
}));

const Styled = {
  GridItemArea,
  ComicInfoContainer,
  ComicImageContainer,
  ComicImage,
  ComicTitle,
  ComicDescription,
};

export default Styled;
