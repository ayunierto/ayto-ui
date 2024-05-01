import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./Menu";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import MenuList from "./MenuList";
import MenuListItem from "./MenuListItem";

/**
 * Menu Component
 *
 * A menu component that can be used to display a list of options.
 */
const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic Menu
 */
export const Basic: Story = {
  args: {
    // The args you need here will depend on your component
  },
  render: (args) => (
    <Menu {...args}>
      {({ toggle }) => (
        <>
          <Button onClick={toggle}>
            Menu <Icon icon="keyboard_arrow_down" />
          </Button>
          <MenuList>
            <MenuListItem>Item 1</MenuListItem>
            <MenuListItem>Item 2</MenuListItem>
            <MenuListItem>Item 3</MenuListItem>
          </MenuList>
        </>
      )}
    </Menu>
  ),
};

export const WithIcon: Story = {
  args: {
    // The args you need here will depend on your component
  },
  render: (args) => (
    <Menu {...args}>
      {({ toggle }) => (
        <>
          <Button onClick={toggle}>
            <Icon icon="warning" />
            Menu <Icon icon="keyboard_arrow_down" />
          </Button>
          <MenuList>
            <MenuListItem>
              <Icon icon="android" /> Item 1, text large
            </MenuListItem>
            <MenuListItem>
              <Icon icon="add" /> Item 2
            </MenuListItem>
            <MenuListItem>
              <Icon icon="android" /> Item 3
            </MenuListItem>
          </MenuList>
        </>
      )}
    </Menu>
  ),
};
