import { TranslateFunction } from '@pancakeswap/localization'
import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. With Fast, Secure Network.'),
  bodyText: t('Trade any token on Core Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://shadow-11.gitbook.io/shadowswap/',
    text: t(''),
    external: true,
  },
  images: {
    path: 'https://i.ibb.co/NTqtNmY/tokens.png',
    attributes: [
      { src: 'ETH', alt: t('ETH token') },
    ],
  },
})


export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with your crypto.'),
  bodyText: t('WOOFSwap makes it easy to make your crypto work for you. Let your WOOF Tokens work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.shadowswap.xyz/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [{ src: 'shdwearn', alt: t('Shadow with shdw token') }],
  },
})

export const nftammSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('OpenWaters NFT Marketplace on Core Network.'),
  bodyText: t(
    'The best NFT Marketplace experience on CoreDAO Blockchain for everyone by WOOFLabs',
  ),
  reverse: false,
  primaryButton: {
    to: 'https://www.openwaters.uk/',
    text: t('Visit NFT Dex'),
    external: false,
  },
  secondaryButton: {
    to: 'https://openwaters.uk',
    text: t(''),
    external: true,
  },
  images: {
    path: 'https://i.ibb.co/QdfZ56L/tribute.png',
    attributes: [{ src: 'NFT', alt: t('NFT Pic') }],
  },

})


export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with WOOF.'),
  bodyText: t(
    'Provide WOOF/Core Liquidity and Stake it on our WOOF Liquidity Farm to get WOOF tokens in rewards!',
  ),
  reverse: false,
  primaryButton: {
    to: 'https://www.woofswap.co/add',
    text: t('Provide Liquidity'),
    external: false,
  },
  secondaryButton: {
    to: '/farms',
    text: t('Stake Liquidity'),
    external: true,
  },

  // images: {
  //   path: '/images/home/cake/',
  //   attributes: [
  //     { src: 'star-bottom-right', alt: t('Small 3d star') },
  //     { src: 'star-top-right', alt: t('Small 3d star') },
  //     { src: 'SHDW3D', alt: t('SHDW token') },
  //     { src: 'star-top-left', alt: t('Small 3d star') },
  //   ],
  // },
  images: {
    path: '/images/',
    attributes: [{ src: 'twin-woof', alt: t('Woof Token') }],
  },
})
