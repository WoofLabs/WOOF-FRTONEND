import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useAccount } from 'wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import bunnyImage from '../../../../public/images/home/lunar-bunny/shadow@2xx.png'
import woofImage from '../../../../public/images/woof.gif'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }

  @media (max-width: 767px) { // Hide woofImage on mobile screens (adjust the breakpoint as needed)
    img {
      display: none !important;
    }
  }
`

const Hero = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()

  return (
    <>
      <style jsx global>
        {`
          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
          }
          [data-theme='dark'] .slide-svg-dark {
            display: block;
          }
          [data-theme='dark'] .slide-svg-light {
            display: none;
          }
        `}
      </style>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="cente"
        mt={[account ? '50px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="secondary" mb="24px" ml="20px" text-align="center">
            {t('The moon is made of')}
            {t(' WOOF Tokens.')}
          </Heading>
          <Heading scale="md" mb="24px" mt="-24px" ml={['20px', '20px']} paddingTop={2}>
            {t(
              'Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.',
            )}
          </Heading>
          <Flex alignItems="center" justifyContent="left" paddingLeft={3}>
            {!account && <ConnectWalletButton mr="8px" />}
            <NextLinkFromReactRouter to="/swap">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <Image src={woofImage} priority alt={t('Lunar woof')} />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
