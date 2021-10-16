import React from 'react'
import { Meta, Story } from '@storybook/react'
import MenuItem, { MenuItemProps } from '.'

const meta: Meta = {
  title: 'Base/MenuItem',
  component: MenuItem,
}

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />

export const SandBox = Template.bind({})
SandBox.args = {
  path: '/',
  children: 'Home',
}

export default meta
