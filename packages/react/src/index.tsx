import { VariantProps } from '@stitches/react'
import { ButtonHTMLAttributes } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  variants: {
    size: {
      sm: {
        fontSize: 12,
        padding: '$1 $2',
      },
      md: {
        fontSize: 16,
        padding: '$2 $4',
      },
      lg: {
        fontSize: 18,
        padding: '$4 $8',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },

  background: '$ignite300',
  fontFamily: '$default',
  borderRadius: '$md',

  border: 'none',
  outline: 'none',

  padding: '$2 $4',
  color: '$white',
})

export type ButtonProps = VariantProps<typeof Button> &
  ButtonHTMLAttributes<HTMLButtonElement>
