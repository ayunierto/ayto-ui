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

export const Default: Story = {
  args: {
    // The args you need here will depend on your component
    icon: "home",
  },
};

export const Sizes: Story = {
  args: {
    icon: "home",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Icon {...args} size="small" />
      <Icon {...args} size="medium" />
      <Icon {...args} size="large" />
    </div>
  ),
};

export const Hoverable: Story = {
  args: {
    size: "large",
    icon: "home",
    hoverable: true,
  },
};

export const Clickable: Story = {
  args: {
    size: "large",
    icon: "home",
    onClick: () => alert("you clicked on me"),
  },
};
