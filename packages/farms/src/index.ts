import { formatEther } from '@ethersproject/units'
import { MultiCallV2 } from '@pancakeswap/multicall'
import { ChainId } from '@pancakeswap/sdk'
import { masterChefAddresses, masterChefAddressesNew } from './const'
import type { FarmWithPrices } from './farmPrices'
import { farmV2FetchFarms, farmV2FetchFarmsNew, FetchFarmsParams, fetchMasterChefV2Data } from './fetchFarms'

const supportedChainId = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET]

export function createFarmFetcher(multicallv2: MultiCallV2) {
  const fetchFarms = async (
    params: {
      isTestnet: boolean
    } & Pick<FetchFarmsParams, 'chainId' | 'farms'>,
  ) => {
    const { isTestnet, farms, chainId } = params
    const masterChefAddress = isTestnet ? masterChefAddresses[ChainId.BSC_TESTNET] : masterChefAddresses[ChainId.BSC]
    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, shdwPerBlock } = await fetchMasterChefV2Data({
      isTestnet,
      multicallv2,
      masterChefAddress,
    })
    const regularShdwPerBlock = formatEther(shdwPerBlock)
    const farmsWithPrice = await farmV2FetchFarms({
      multicallv2,
      masterChefAddress,
      isTestnet,
      chainId,
      farms: farms.filter((f) => !f.pid || poolLength.gt(f.pid)),
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
    })

    return {
      farmsWithPrice,
      poolLength: poolLength.toNumber(),
      regularShdwPerBlock: +regularShdwPerBlock,
    }
  }
  return {
    fetchFarms,
    isChainSupported: (chainId: number) => supportedChainId.includes(chainId),
    supportedChainId,
    isTestnet: (chainId: number) => ![ChainId.BSC].includes(chainId),
  }
}

export function createFarmFetcherNew(multicallv2: MultiCallV2) {
  const fetchFarms = async (
    params: {
      isTestnet: boolean
    } & Pick<FetchFarmsParams, 'chainId' | 'farms'>,
  ) => {
    const { isTestnet, farms, chainId } = params
    const masterChefAddress = isTestnet ? masterChefAddressesNew[ChainId.BSC_TESTNET] : masterChefAddressesNew[ChainId.BSC]
    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, shdwPerBlock } = await fetchMasterChefV2Data({
      isTestnet,
      multicallv2,
      masterChefAddress,
    })
    const regularShdwPerBlock = formatEther(shdwPerBlock)
    const farmsWithPrice = await farmV2FetchFarmsNew({
      multicallv2,
      masterChefAddress,
      isTestnet,
      chainId,
      farms: farms.filter((f) => !f.pid || poolLength.gt(f.pid)),
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
    })

    return {
      farmsWithPrice,
      poolLength: poolLength.toNumber(),
      regularShdwPerBlock: +regularShdwPerBlock,
    }
  }
  return {
    fetchFarms,
    isChainSupported: (chainId: number) => supportedChainId.includes(chainId),
    supportedChainId,
    isTestnet: (chainId: number) => ![ChainId.BSC].includes(chainId),
  }
}

export * from './apr'
export * from './farmsPriceHelpers'
export * from './types'
export type { FarmWithPrices }
