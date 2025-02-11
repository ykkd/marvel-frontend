import NextLink from "next/link";
import Styled from "./styled";

const Component = () => {
  return (
    <Styled.CustomToolbar>
      <NextLink href="/">
        <Styled.LogoImage src={`/images/marvel-logo.svg`} alt={"Marvel"} />
      </NextLink>
    </Styled.CustomToolbar>
  );
};

export default Component;
