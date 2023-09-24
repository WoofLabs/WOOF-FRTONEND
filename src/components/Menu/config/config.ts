import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  NFTAMMFillIcon,
  EarnIcon,
  MoreIcon,
  NFTAMMIcon,
  LendIcon,
  LendFillIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Trade'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        showItemsOnMobile: false,
        items: [
          {
            label: t('Swap'),
            href: '/swap',
          },
          {
            label: t('Liquidity'),
            href: '/liquidity',
          },

        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('Earn'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/farms',
        showItemsOnMobile: false,
        items: [
          {
            label: t('Farms'),
            href: '/farms',
          },

        ].map((item) => addMenuItemSupported(item, chainId)),
      },      
      // {
      //   label: t('Earn'),
      //   href: '/farms',
      //   icon: EarnIcon,
      //   fillIcon: EarnFillIcon,
      //   image: '/images/decorations/pe2.png',
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   items: [
      //     {
      //       label: t('Farms'),
      //       href: '/farms',
      //     },
      //     {
      //       label: t('Pools'),
      //       href: '/pools',
      //       supportChainIds: SUPPORT_ONLY_BSC,
      //     },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
      // },

      // {
      //   label: t('Lend'),
      //   href: '/lend',
      //   icon: LendIcon,
      //   fillIcon: LendFillIcon,
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   items: [
      //     {
      //       label: t('Supply Market'),
      //       href: '/NotFound',
      //     },
      //     {
      //       label: t('Borrow Market'),
      //       href: '/NotFound',
      //       supportChainIds: SUPPORT_ONLY_BSC,
      //     },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
      // },

      // {
      //   label: t('Nft Amm'),
      //   href: '/NotFound',
      //   icon: NFTAMMIcon,
      //   fillIcon: NFTAMMFillIcon,
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   items: [
      //     {
      //       label: t('View Collections'),
      //       href: '/NotFound',
      //     },
      //     {
      //       label: t('List Your NFTs'),
      //       href: '/NotFound',
      //       supportChainIds: SUPPORT_ONLY_BSC,
      //     },
      //     {
      //       label: t('Create A New Pool'),
      //       href: '/NotFound',
      //     },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
      // },

      {
        label: '',
        href: '/info',
        icon: MoreIcon,
        hideSubNav: true,
        items: [
          {
            label: t('Info'),
            href: 'https://medium.com/@nftmoondogs',
            supportChainIds: SUPPORT_ONLY_BSC,
          },
          // {
          //   label: t('IFO'),
          //   href: '/ifo',
          //   supportChainIds: SUPPORT_ONLY_BSC,
          // },
          // {
          //   label: t('Shadow Puppet'),
          //   href: '/shadow-puppet',
          //   supportChainIds: SUPPORT_ONLY_BSC,
          // },
          // {
          //   label: t('Voting'),
          //   href: '/voting',
          //   supportChainIds: SUPPORT_ONLY_BSC,
          // },
          {
            type: DropdownMenuItemType.DIVIDER,
          },
          // {
          //   type: DropdownMenuItemType.DIVIDER,
          // },
          {
            label: t('Blog'),
            href: 'https://twitter.com/wooflabs',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          {
            label: t('Docs'),
            href: 'https://wooftoken.gitbook.io/woof-token/',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          // {
          //   label: t('Defillama'),
          //   href: 'https://defillama.com/protocol/shadowswap',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
          // {
          //   label: t('GeckoTerminal'),
          //   href: 'https://www.geckoterminal.com/core/shadowswap/pools',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
          // {
          //   label: t('Ave.ai'),
          //   href: 'https://ave.ai/token/0xddBa66C1eBA873e26Ac0215Ca44892a07d83aDF5-core?from=Default',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
          // {
          //   label: t('DexScreener'),
          //   href: 'https://dexscreener.com/core/shadowswap',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
