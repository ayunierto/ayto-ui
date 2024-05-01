import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
  title: "Components/Icon",
  argTypes: {
    icon: { control: "select" },
    size: { control: "inline-radio" },
  },
  parameters: {
    // layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Defaul: Story = {
  args: {
    // The args you need here will depend on your component
    icon: "home",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    icon: "home",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    icon: "home",
  },
};
