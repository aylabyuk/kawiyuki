import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Hamburger, { HamburgerProps } from '.'

const meta: Meta = {
  title: 'Base/Hamburger',
  component: Hamburger,
}

const Template: Story<HamburgerProps> = (args) => <Hamburger {...args} />

export const SandBox = Template.bind({})
SandBox.args = {
  isOpen: false,
}

export default meta
