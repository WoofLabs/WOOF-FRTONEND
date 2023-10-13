import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef, useMasterchefNew } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useUnstakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()
  const masterChefContractNew = useMasterchefNew()
  const gasPrice = useGasPrice()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(masterChefContract, pid, amount, gasPrice)
    },
    [masterChefContract, pid, gasPrice],
  )

  const handleUnstakeNew = useCallback(
    async (amount: string) => {
      return unstakeFarm(masterChefContractNew, pid, amount, gasPrice)
    },
    [masterChefContractNew, pid, gasPrice],
  )

  return { onUnstake: handleUnstake, onUnstakeNew: handleUnstakeNew }
}

export default useUnstakeFarms
