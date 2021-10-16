import React from 'react'
import { Meta, Story } from '@storybook/react'
import Menu, { MenuProps } from '.'

const meta: Meta = {
  title: 'Base/Menu',
  component: Menu,
}

const Template: Story<MenuProps> = (args) => <Menu {...args} />

export const SandBox = Template.bind({})

export default meta
