import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";
import Icon from "../icon/Icon";
import Button from "../button/Button";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Alert> = {
  tags: ["autodocs"],
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // The args you need here will depend on your component
    children: "This is an alert",
  },
};

export const WithIcon: Story = {
  args: {
    // The args you need here will depend on your component
    children: "This is an alert",
  },
  render: (args) => (
    <Alert {...args}>
      <Icon icon="info" />
      This is an alert with icon{" "}
    </Alert>
  ),
};

export const Variants: Story = {
  args: {
    children: "This is an alert",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Alert {...args} variant="primary">
        <Icon icon="info" /> This is an alert with colors
      </Alert>
      <Alert {...args} variant="success">
        <Icon icon="check_circle" /> This is an alert with colors
      </Alert>
      <Alert {...args} variant="warning">
        <Icon icon="info" /> This is an alert with colors
      </Alert>
      <Alert {...args} variant="error">
        <Icon icon="info" /> This is an alert with colors
      </Alert>
    </div>
  ),
};

export const WithButton: Story = {
  args: {
    children: "This is an alert",
  },
  render: (args) => (
    <Alert {...args} variant="success">
      <Icon icon="info" /> This is an alert with colors{" "}
      <Button>Click me</Button>
    </Alert>
  ),
};
