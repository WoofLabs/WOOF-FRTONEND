import { Box, Flex, lightColors, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSquadHeaderContainer = styled(Flex)`
  position: relative;
  background: url('https://raw.githubusercontent.com/SVerseLab/images/master/longbox.png');
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
`

export const StyledSquadTitle = styled(Text)`
  font-size: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 64px;
  }
`

export const StyledSquadEventBorder = styled(Box)`
  background: linear-gradient(180deg, #53dee9 0%, #7645d9 100%);
  border-radius: 32px;
`

export const StyledSquadEventContainer = styled(Flex)`
  background: ${lightColors.text};
  background-clip: padding-box;
  border-radius: inherit;
`
