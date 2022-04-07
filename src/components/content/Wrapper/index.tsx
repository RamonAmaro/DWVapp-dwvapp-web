import { Box, BoxProps } from "@mui/material";

type TBoxProps = BoxProps;

export const Wrapper: React.FC<TBoxProps> = ({ ...props }) => {
  return <Box {...props} />;
};
