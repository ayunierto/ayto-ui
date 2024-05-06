import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  tags: ["autodocs"],
  component: Card,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "inline-radio" },
    },
    shadow: {
      control: { type: "boolean" },
    },
    hoverable: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Card Example",
  },
};

export const WithShadow: Story = {
  args: {
    children: "Card Example",
    shadow: true,
  },
};

export const Sizes: Story = {
  args: {
    children: "Card Example",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Card {...args} size="small"></Card>
      <Card {...args} size="medium"></Card>
      <Card {...args} size="large"></Card>
    </div>
  ),
};

export const Hoverable: Story = {
  args: {
    children: "Card Example",
    hoverable: true,
  },
};
