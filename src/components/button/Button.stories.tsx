import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import Icon from "../icon/Icon";

/**
 * An interactive button that allows users to perform a specific action in the application.
 */
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
    disabled: { type: "boolean" },
    variant: {
      control: { type: "inline-radio" },
    },
    block: {
      control: { type: "boolean" },
    },
    contentLeft: {
      type: "boolean",
    },
    onClick: { type: "function" },
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
  render: (args) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...args} variant="flat">
        Button 1
      </Button>
      <Button {...args} variant="solid">
        Button 2
      </Button>
      <Button {...args} variant="bordered">
        Button 3
      </Button>
    </div>
  ),
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...args} color="default">
        Button 1
      </Button>
      <Button {...args} color="primary">
        Button 2
      </Button>
      <Button {...args} color="success">
        Button 3
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button {...args} size="small">
        Button 1
      </Button>
      <Button {...args} size="medium">
        Button 2
      </Button>
      <Button {...args} size="large">
        Button 3
      </Button>
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
