import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef, useMasterchefNew, useERC20 } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useStakeFarms = (pid: number, lpContract) => {
  const masterChefContract = useMasterchef()
  const masterChefContractNew = useMasterchefNew()
  const gasPrice = useGasPrice()

  const handleStake = useCallback(
    async (amount: string) => {
      await lpContract.approve(masterChefContract.address, "115792089237316195423570985008687907853269984665640564039457584007913129639935");
      return stakeFarm(masterChefContract, pid, amount, gasPrice)
    },
    [masterChefContract, pid, gasPrice],
  )

  const handleStakeNew = useCallback(
    async (amount: string) => {
      await lpContract.approve(masterChefContractNew.address, "115792089237316195423570985008687907853269984665640564039457584007913129639935");
      return stakeFarm(masterChefContractNew, pid, amount, gasPrice)
    },
    [masterChefContractNew, pid, gasPrice],
  )

  return { onStake: handleStake, onStakeNew: handleStakeNew }
}

export default useStakeFarms
