import { SerializedFarmConfig } from '@pancakeswap/farms'
import { bscTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET, CPT_SHDW_LP_MAINNET } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 5,
    lpSymbol: 'WOOF-CORE LP',
    lpAddress: '0x4316285b2360091010f29cb93b24365121341af4',
    token: bscTokens.woof,
    quoteToken: bscTokens.wbnb,
  },

  // {
  //   pid: 7,
  //   lpSymbol: 'USDT-USDC LP',
  //   lpAddress: '0xe51fdd6e02907071Dc2aa742B58a271596708E5E',
  //   token: bscTokens.busd, // coins[0]
  //   quoteToken: bscTokens.usdc, // coins[1]
  //   stableSwapContract: '0xb397D735832131E8BCA731f0C9b5567713b4f2af',
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'USDT-USDC LP',
  //   lpAddress: '0xa5238BffD7BF62D9DeF4A9319b79d76A1d5D3256',
  //   token: bscTokens.busd,
  //   quoteToken: bscTokens.usdt,
  // },

  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
