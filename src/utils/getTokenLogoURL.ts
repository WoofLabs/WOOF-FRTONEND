import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    if (token.symbol === 'WOOF') {
      // woof
      return 'https://i.ibb.co/r5bx1Gp/Safeimagekit-resized-img-22.png'
    }
    if (token.symbol === 'USDT') {
      return 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
    }

    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
  }

  return null
}

export default getTokenLogoURL
