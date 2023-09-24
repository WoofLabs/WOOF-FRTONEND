import { useWeb3React } from '@pancakeswap/wagmi'
import { Ifo, PoolIds } from 'config/constants/types'
import { WalletIfoData, PublicIfoData } from 'views/Ifos/types'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ContributeButton from './ContributeButton'
import ClaimButton from './ClaimButton'
import { SkeletonCardActions } from './Skeletons'
import { EnableStatus } from '../types'
import TotalPurchased from './TotalPurchased'
import TotalUserCommited from './TotalCommited'
import TotalUserRefund from './TotalRefund'

interface Props {
  poolId: PoolIds
  ifo: Ifo
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
  isLoading: boolean
  isEligible: boolean
  enableStatus: EnableStatus
}

const IfoCardActions: React.FC<React.PropsWithChildren<Props>> = ({
  poolId,
  ifo,
  publicIfoData,
  walletIfoData,
  isLoading,
  isEligible,
  enableStatus,
}) => {
  const { account } = useWeb3React()
  const userPoolCharacteristics = walletIfoData[poolId]

  if (isLoading) {
    return <SkeletonCardActions />
  }

  if (!account) {
    return <ConnectWalletButton width="100%" />
  }

  // const needClaim =
  //   publicIfoData.status === 'finished' &&
  //   !userPoolCharacteristics.hasClaimed &&
  //   (userPoolCharacteristics.offeringAmountInToken.isGreaterThan(0) ||
  //     userPoolCharacteristics.refundingAmountInLP.isGreaterThan(0))

  // if (needClaim) {
  //   return <ClaimButton poolId={poolId} ifoVersion={ifo.version} walletIfoData={walletIfoData} />
  // }

  if (
    (enableStatus !== EnableStatus.ENABLED && publicIfoData.status === 'coming_soon') ||
    (ifo.version >= 3.1 && poolId === PoolIds.poolBasic && !isEligible)
  ) {
    return null
  }

  return (
    <>
      {(publicIfoData.status === 'live' || publicIfoData.status === 'coming_soon') && (
        <ContributeButton poolId={poolId} ifo={ifo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />
      )}

      {publicIfoData.status === 'finished' &&
        !userPoolCharacteristics.hasClaimed &&
        (userPoolCharacteristics.offeringAmountInToken.isGreaterThan(0) ||
          userPoolCharacteristics.refundingAmountInLP.isGreaterThan(0)) && (
          <ClaimButton poolId={poolId} ifoVersion={ifo.version} walletIfoData={walletIfoData} />
        )}

      {(publicIfoData.status === 'live' || publicIfoData.status === 'coming_soon') && (
        <TotalPurchased ifo={ifo} poolId={poolId} walletIfoData={walletIfoData} />
      )}

      {(publicIfoData.status === 'finished' || publicIfoData.status === 'coming_soon') && (
        <TotalPurchased ifo={ifo} poolId={poolId} walletIfoData={walletIfoData} />
      )}

      {(publicIfoData.status === 'live' || publicIfoData.status === 'coming_soon') && (
        <TotalUserCommited ifo={ifo} poolId={poolId} walletIfoData={walletIfoData} />
      )}

      {(publicIfoData.status === 'finished' || publicIfoData.status === 'coming_soon') && (
        <TotalUserCommited ifo={ifo} poolId={poolId} walletIfoData={walletIfoData} />
      )}

      {(publicIfoData.status === 'live' || publicIfoData.status === 'coming_soon') && (
        <TotalUserRefund ifo={ifo} poolId={poolId} walletIfoData={walletIfoData} />
      )}

      {(publicIfoData.status === 'finished' || publicIfoData.status === 'coming_soon') && (
        <TotalUserRefund ifo={ifo} poolId={poolId} walletIfoData={walletIfoData} />
      )}
    </>
  )
}

export default IfoCardActions
