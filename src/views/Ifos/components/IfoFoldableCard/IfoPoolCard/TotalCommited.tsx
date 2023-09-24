import { Flex, Box, Text } from '@pancakeswap/uikit'
import { LightGreyCard } from 'components/Card'
import { TokenImage } from 'components/TokenImage'
import BalanceWithLoading from 'components/Balance'
import { Ifo, PoolIds } from 'config/constants/types'
import { WalletIfoData } from 'views/Ifos/types'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTranslation } from '@pancakeswap/localization'

interface TotalUserCommitedProps {
  ifo: Ifo
  poolId: PoolIds
  walletIfoData: WalletIfoData
}

const TotalUserCommited: React.FC<React.PropsWithChildren<TotalUserCommitedProps>> = ({
  ifo,
  poolId,
  walletIfoData,
}) => {
  const { t } = useTranslation()
  const { currency } = ifo
  const { amountTokenCommittedInLP } = walletIfoData[poolId]

  return (
    <LightGreyCard mt="35px" mb="24px">
      <Flex>
        <TokenImage mr="16px" width={32} height={32} token={currency} style={{ alignSelf: 'flex-start' }} />
        <Box>
          <Text color="secondary" bold fontSize="12px">
            {t('Total %symbol% Commited ', { symbol: currency.symbol })}
          </Text>
          <BalanceWithLoading
            bold
            prefix="~"
            decimals={4}
            fontSize="20px"
            value={getBalanceNumber(amountTokenCommittedInLP, currency.decimals)}
          />
        </Box>
      </Flex>
    </LightGreyCard>
  )
}

export default TotalUserCommited
