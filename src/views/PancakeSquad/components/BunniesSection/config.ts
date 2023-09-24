import { ContextApi } from '@pancakeswap/localization'

const bunniesConfig = (t: ContextApi['t']) => {
  return {
    headingText: t('10,000 puppets.'),
    subHeadingText: t('ZERO duplicates.'),
    bodyText: [
      t('Every Shadow Puppet is Unique.'),
      t(
        'The Puppets Comes In Diffrent Class, Pirates, Magicians and more to be released from the Shadows with alots of Traits for each class.',
      ),
      t('Note: This preview will be slightly diffrent when the NFTs Arrive'),
    ],
    primaryButton: {
      to: '/NotFound',
      text: t('View in Market'),
    },
    images: { basePath: '/images/pancakeSquad/bunnies/bunny', alt: 'bunny nft' },
  }
}

export default bunniesConfig
