import type { Meta, StoryObj } from "@storybook/react";
import { Button as CZIFUIButton } from "@czi-sds/components";

const meta: Meta<typeof CZIFUIButton> = {
  title: "Demos of CZI components/Button",
  component: CZIFUIButton,
  argTypes: {
    sdsStyle: {
      options: ["rounded", "square", "minimal"],
      control: { type: "radio" },
    },
    sdsType: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CZIFUIButton>;

export const Button: Story = {
  args: {
    sdsStyle: "rounded",
    sdsType: "primary",
    disabled: false,
  },
  render: (args) => <CZIFUIButton {...args}>Test</CZIFUIButton>,
};
