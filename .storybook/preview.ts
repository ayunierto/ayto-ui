import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/index.css";
import "./main.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
      autodocs: "tag",
    },
  },
};

export default preview;
