import { colors } from '@ignite-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  background: '$ignite700',
  fontFamily: '$default',
  borderRadius: '$md',
  width: '$10',
})

export const App = () => {
  return (
    <>
      <h1 style={{ color: colors.ignite300 }}>Hello World</h1>

      <Button>Hello World!</Button>
    </>
  )
}
