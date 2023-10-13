import { useCallback } from 'react'
import { harvestFarm, harvestFarmNew } from 'utils/calls'
import { useMasterchef, useMasterchefNew } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useHarvestFarm = (farmPid: number) => {
  const masterChefContract = useMasterchef()
  const masterChefContractNew = useMasterchefNew()
  const gasPrice = useGasPrice()

  const handleHarvest = useCallback(async () => {
    return harvestFarm(masterChefContract, farmPid, gasPrice)
  }, [farmPid, masterChefContract, gasPrice])
  
  const handleHarvestNew = useCallback(async () => {
    return harvestFarmNew(masterChefContractNew, farmPid, gasPrice)
  }, [farmPid, masterChefContractNew, gasPrice])

  return { onReward: handleHarvest, onRewardNew: handleHarvestNew }
}

export default useHarvestFarm
