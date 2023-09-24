import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [

      {
        label: t('Blog'),
        href: 'https://medium.com/@nftmoondogs',
      },
      {
        label: t('CoreDao'),
        href: 'https://coredao.org/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Guides'),
        href: 'https://wooftoken.gitbook.io/woof-token/',
      },
      {
        label: t('Getting Started with Core'),
        href: 'https://docs.coredao.org/developer',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [

      {
        label: t('Core Network Docs'),
        href: 'https://docs.coredao.org/core-white-paper-v1.0.5/',
      },

    ],
  },
]
