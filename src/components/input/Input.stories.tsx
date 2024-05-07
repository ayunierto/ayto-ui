import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";
import Icon from "../icon/Icon";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  argTypes: {
    className: { control: { type: "text" } },
    style: { control: { type: "object" } },
    type: { control: { type: "inline-radio" } },
    placeholder: { control: { type: "text" } },
    value: { type: "string" },
    onChange: { type: "function" },
    contentAfter: { control: { type: "text" } },
    contentBefore: { control: { type: "text" } },
    id: { control: { type: "text" } },
    size: { control: { type: "inline-radio" } },
  },
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

export const Content: Story = {
  args: {
    // The args you need here will depend on your component
  },
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      {...args}
    >
      <div>
        <label htmlFor="searh">Searh</label>
        <Input contentAfter={<Icon clickable icon="search" />} id="searh" />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <Input contentBefore="$" contentAfter=".00" id="amount" />
      </div>
      <div>
        <label htmlFor="person">Amount</label>
        <Input contentBefore={<Icon icon="person" />} id="person" />
      </div>
    </div>
  ),
};

export const Size: Story = {
  args: {
    // The args you need here will depend on your component
  },
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      {...args}
    >
      <Input
        size="small"
        contentAfter={<Icon size="small" clickable icon="search" />}
        id="searh"
      />
      <Input size="medium" contentBefore="$" contentAfter=".00" id="amount" />
      <Input
        size="large"
        contentBefore={<Icon size="large" icon="person" />}
        id="person"
      />
    </div>
  ),
};
