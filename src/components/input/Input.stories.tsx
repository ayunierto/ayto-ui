import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  title: "Components/Input",

  tags: ["autodocs"],
  component: Input,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // The args you need here will depend on your component
  },
};

export const WithPlaceholder: Story = {
  args: {
    // The args you need here will depend on your component
    placeholder: "I'm placeholder",
  },
};
