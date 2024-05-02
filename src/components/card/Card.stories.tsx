import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  tags: ["autodocs"],
  component: Card,
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
