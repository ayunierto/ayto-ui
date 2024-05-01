import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import Icon from "../icon/Icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
    },
    size: {
      control: { type: "inline-radio" },
    },
    color: {
      control: { type: "inline-radio" },
    },
    type: {
      control: { type: "inline-radio" },
    },
    disabled: {
      control: "boolean",
    },
    variant: {
      control: { type: "inline-radio" },
    },
  },
  parameters: {
    // layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

/**
 * Variants of the icon
 */
export const Variants: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="flat">Button 1</Button>
      <Button variant="solid">Button 2</Button>
      <Button variant="bordered">Button 3</Button>
    </div>
  ),
};

export const Colors: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color="default">Button 1</Button>
      <Button color="primary">Button 2</Button>
      <Button color="success">Button 3</Button>
    </div>
  ),
};

export const Sizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button size="small">Button 1</Button>
      <Button size="medium">Button 2</Button>
      <Button size="large">Button 3</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {},
  render: (args) => (
    <Button {...args}>
      <Icon icon="home" />
      With Icon
    </Button>
  ),
};
