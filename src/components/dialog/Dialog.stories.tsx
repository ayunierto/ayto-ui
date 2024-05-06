import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Dialog from "./Dialog";
import DialogHeader from "./DialogHeader";
import DialogTitle from "./DialogTitle";
import DialogCloseButton from "./DialogCloseButton";
import Icon from "../icon/Icon";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
import Button from "../button/Button";
import DialogTrigger from "./DialogTrigger";
import DialogContent from "./DialogContent";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  tags: ["autodocs"],
  component: Dialog,
  // decorators: [
  //   (Story) => (
  //     <div style={{ height: "200px", overflow: "visible" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    style: {
      control: { type: "object" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // The args you need here will depend on your component
  },
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>This is a title</DialogTitle>
          <DialogCloseButton>
            <Icon icon="close" />
          </DialogCloseButton>
        </DialogHeader>
        <DialogBody>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            libero magnam saepe neque consectetur numquam.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={() => alert("Add a function to execute")}
            variant="bordered"
          >
            Close
          </Button>
          <Button
            onClick={() => alert("Add a function to execute")}
            variant="solid"
            color="primary"
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const OnlyInfo: Story = {
  args: {
    // The args you need here will depend on your component
  },
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Info</DialogTitle>
          <DialogCloseButton>
            <Icon icon="close" />
          </DialogCloseButton>
        </DialogHeader>
        <DialogBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            vero quia eius esse pariatur impedit!
          </p>
        </DialogBody>
      </DialogContent>
    </Dialog>
  ),
};
/**
 * Exposing all dialogue controls
 */
export const Full: Story = {
  args: {},
  render: () => (
    <Dialog>
      {({ open, close }) => (
        <>
          <DialogTrigger onClick={open}>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>This is a title</DialogTitle>
              <DialogCloseButton>
                <Icon icon="close" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogBody>
              <p>This is a dialog</p>
            </DialogBody>
            <DialogFooter>
              <Button onClick={close} variant="bordered">
                Cancel
              </Button>
              <Button onClick={() => alert("Clicked")} color="primary">
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </>
      )}
    </Dialog>
  ),
};
