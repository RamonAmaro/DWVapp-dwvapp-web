import { Slider as MUISlider, SliderProps } from "@mui/material";

type TSlydeProps = SliderProps;

export const Slider: React.FC<TSlydeProps> = ({ ...props }) => {
  return <MUISlider {...props} />;
};
