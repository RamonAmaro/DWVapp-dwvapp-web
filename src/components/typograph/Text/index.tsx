import { Typography, TypographyProps } from "@mui/material";

interface ITypographProps extends TypographyProps {
  label: string;
  fontWeight?: "bold" | "regular" | "black";
  fontSize: string;
  dark?: boolean;
}

const fontWeightKeys = {
  regular: 400,
  bold: 700,
  black: 900,
};

export const TextComponent: React.FC<ITypographProps> = ({
  label,
  fontWeight = "regular",
  fontSize,
  dark,
  ...props
}) => {
  return (
    <Typography
      color={dark ? "grey.900" : "grey.50"}
      sx={{
        fontWeight: fontWeightKeys[fontWeight],
        fontSize,
        lineHeight: 1,
      }}
      {...props}
    >
      {label}
    </Typography>
  );
};
