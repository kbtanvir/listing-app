import { extendTheme, ThemeComponents } from "@chakra-ui/react";
import "@fontsource/inter";
import { ButtonStyle } from "./components/Button";
import { InputStyle } from "./components/Input";
import { SelectStyle } from "./components/Select";
import { TextStyle } from "./components/Text";
import { TextAreaStyle } from "./components/TextArea";
import { colors } from "./consts/colors.const";
import { globalStyle } from "./consts/globalStyle.const";
const breakpoints = {
  sm: "550px",
  xl: "1200px",
};
const components = {
  Input: InputStyle,
  Button: ButtonStyle,
  Text: TextStyle,
  Textarea: TextAreaStyle,
  Select: SelectStyle,
} as ThemeComponents;

const theme = extendTheme({
  breakpoints,
  components,
  styles: globalStyle,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors,
});

export default theme;
