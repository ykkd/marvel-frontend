import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "@/app/components/header";
import Styled from "./styled";

const Component = ({
  children,
}: {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "block", width: "100%" }}>
      <Header />
      <div style={Styled.Children(theme)}>{children}</div>
    </Box>
  );
};

export default Component;
