import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";
import Icon from "../icon/Icon";
import Button from "../button/Button";

/**
 * The “Alert” component displays prominent contextual notifications.
 * If you need to show a stack of notifications,
 * consider using “Alerts” instead .
 */
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an alert",
  },
};

export const WithIcon: Story = {
  args: {
    children: "This is an alert",
  },
  render: (args) => (
    <Alert {...args}>
      <Icon icon="info" />
      This is an alert with icon
    </Alert>
  ),
};

export const Variants: Story = {
  args: {
    children: "This is an alert with colors",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Alert {...args} color="primary">
        <Icon icon="info" /> {args.children}
      </Alert>
      <Alert {...args} color="success">
        <Icon icon="check_circle" /> {args.children}
      </Alert>
      <Alert {...args} color="warning">
        <Icon icon="info" /> {args.children}
      </Alert>
      <Alert {...args} color="error">
        <Icon icon="info" /> {args.children}
      </Alert>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    children: "This is an alert",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Alert {...args} color="primary" size="small">
        This is an alert with colors
      </Alert>
      <Alert {...args} color="success" size="medium">
        This is an alert with colors
      </Alert>
      <Alert {...args} color="warning" size="large">
        This is an alert with colors
      </Alert>
    </div>
  ),
};

export const WithButton: Story = {
  args: {
    children: "This is an alert",
  },
  render: (args) => (
    <Alert {...args} color="success">
      <Icon icon="info" /> This is an alert with colors{" "}
      <Button size="small">Click me</Button>
    </Alert>
  ),
};
