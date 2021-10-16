import React from 'react'
import { Meta, Story } from '@storybook/react'
import Header, { HeaderProps } from '.'

const meta: Meta = {
  title: 'Features/Header',
  component: Header,
}

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const SandBox = Template.bind({})

export default meta
