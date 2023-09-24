import { InstagramIcon, TwitterIcon } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

type ArtistConfigType = {
  t: ContextApi['t']
  isDark: boolean
}

const artistConfigBuilder = ({ t, isDark }: ArtistConfigType) => ({
  headingText: t('Meet the Artist'),
  bodyText: [
    t('Pixelwish, a design guru that specializes in the art of graphic design and visual communication,'),
    t('has set out to deliver the world of shadow puppets.'),
    t('With his vast array of creative possibilities,'),
    t('He his determined to bring these Shadow creatures to life in a whole new way.'),
    t('Utilizing cutting-edge 3D design techniques,'),
    t('he will craft each shadow puppet to be a one-of-a-kind masterpiece.'),
    t('These NFTs will not just be digital assets, '),
    t('but true works of art that will be cherished for years to come.'),
    t('Each creation will be authentic, rare and utility based'),
    t('giving them an added value to collectors.'),
    t('With Pixelwish, the world of shadow puppets will never be the same.'),
  ],
  buttons: [
    {
      to: 'https://twitter.com/Pixelwish_',
      text: t('Follow on Twitter'),
      external: true,
      icon: <TwitterIcon color="white" />,
    },
    {
      to: 'https://www.instagram.com/pixelwish_/',
      text: t('Follow on Instagram'),
      external: true,
      icon: <InstagramIcon color="white" />,
    },
  ],
  image: { src: `/images/pancakeSquad/artist${isDark ? '-dark' : ''}.png`, alt: 'Shadow pixelwish bio' },
})

export default artistConfigBuilder
