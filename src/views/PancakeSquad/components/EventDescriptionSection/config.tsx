import { ContextApi } from '@pancakeswap/localization'

type EventDescriptionType = {
  t: ContextApi['t']
}

const eventDescriptionConfigBuilder = ({ t }: EventDescriptionType) => ({
  headingText: t('Fair, Random, Rare'),
  subHeadingText: t(
    'All Shadow Puppet NFTs are allocated to Shadow Ticket holders through a provably-fair system based on Switchboard at the time of minting.',
  ),
  bodyTextHeader: t('Out of the 10,000 total NFTs in the shadow,'),
  bodyText: [
    {
      id: 1,
      content: (
        <>{t('500 are available in the pre-sale More Information Later on)')}</>
      ),
    },
    { id: 2, content: t('200 are reserved by the team for community giveaways, etc;') },
    {
      id: 3,
      content: (
        <>
          {t('and the remaining NFTs can be minted by anyone')}
        </>
      ),
    },
  ],
  primaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('View Documentation'),
    external: true,
    isDisplayed: false,
  },
  image: { src: '/images/pancakeSquad/moonBunny/body.png', alt: 'moon bunny' },
  accessoriesImages: [
    { src: '/images/pancakeSquad/moonBunny/band.png', alt: 'headband' },
    { src: '/images/pancakeSquad/moonBunny/cloth.png', alt: 'cloth' },
    { src: '/images/pancakeSquad/moonBunny/glasses.png', alt: 'glasses' },
    { src: '/images/pancakeSquad/moonBunny/pancake.png', alt: 'pancake' },
  ],
})

export default eventDescriptionConfigBuilder
