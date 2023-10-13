import { useCallback } from 'react'
import { MaxUint256 } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { getMasterChefAddress, getMasterChefAddressNew } from 'utils/addressHelpers'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'

const useApproveFarm = (lpContract: Contract, chainId: number) => {
  const masterChefAddress = getMasterChefAddress(chainId)
  const masterChefAddressNew = getMasterChefAddressNew(chainId)

  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    return callWithGasPrice(lpContract, 'approve', [masterChefAddress, MaxUint256])
  }, [lpContract, masterChefAddress, callWithGasPrice])

  const handleApproveNew = useCallback(async () => {
    return callWithGasPrice(lpContract, 'approve', [masterChefAddressNew, MaxUint256])
  }, [lpContract, masterChefAddressNew, callWithGasPrice])

  return { onApprove: handleApprove, onApproveNew: handleApproveNew }
}

export default useApproveFarm

export const useApproveBoostProxyFarm = (lpContract: Contract, proxyAddress?: string) => {
  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    return proxyAddress && callWithGasPrice(lpContract, 'approve', [proxyAddress, MaxUint256])
  }, [lpContract, proxyAddress, callWithGasPrice])

  return { onApprove: handleApprove }
}
