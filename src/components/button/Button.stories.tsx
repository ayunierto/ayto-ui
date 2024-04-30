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
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
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
