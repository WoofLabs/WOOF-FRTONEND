import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef, useMasterchefNew, useERC20 } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useStakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()
  const masterChefContractNew = useMasterchefNew()
  const gasPrice = useGasPrice()

  const handleStake = useCallback(
    async (amount: string) => {
      return stakeFarm(masterChefContract, pid, amount, gasPrice)
    },
    [masterChefContract, pid, gasPrice],
  )

  const handleStakeNew = useCallback(
    async (amount: string) => {
      return stakeFarm(masterChefContractNew, pid, amount, gasPrice)
    },
    [masterChefContractNew, pid, gasPrice],
  )

  return { onStake: handleStake, onStakeNew: handleStakeNew }
}

export default useStakeFarms
