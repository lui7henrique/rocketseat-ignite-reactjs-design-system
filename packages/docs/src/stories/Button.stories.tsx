import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
    size: 'md',
  },
} as Meta<ButtonProps>

export const Sm: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
export const Md: StoryObj = {
  args: {
    children: 'Enviar',
    size: 'md',
  },
}
export const Lg: StoryObj = {
  args: {
    children: 'Enviar',
    size: 'lg',
  },
}
