import { Box, Flex, lightColors, Text, Timeline } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useGetCakeBalance } from 'hooks/useTokenBalance'
import useTheme from 'hooks/useTheme'
import { StyledWaveContainer } from 'views/PancakeSquad/styles'
import { UserStatusEnum } from 'views/PancakeSquad/types'
import ConnectWalletButton from 'components/ConnectWalletButton'
import HeaderBottomWave from '../../assets/HeaderBottomWave'
import nftSaleConfigBuilder from '../../config'
import CtaButtons from './CtaButtons'
import MintText from './MintText'
import PreEventText from './PreEventText'
import SaleProgress from './SaleProgress'
import {
  StyledSquadEventBorder,
  StyledSquadEventContainer,
  StyledSquadHeaderContainer,
  StyledSquadTitle,
} from './styles'
import { PancakeSquadHeaderType } from './types'

const DEFAULT_CAKE_COST = 0.0
const DEFAULT_MAX_TICKETS = 10

const PancakeSquadHeader: React.FC<React.PropsWithChildren<PancakeSquadHeaderType>> = ({
  userInfos,
  eventInfos,
  account,
  userStatus,
  isLoading,
}) => {
  const { t } = useTranslation()
  const { theme, isDark } = useTheme()
  const { balance: cakeBalance } = useGetCakeBalance()
  const displayEventBlock = !!eventInfos || isLoading
  const {
    ticketsOfUser,
    numberTicketsUsedForGen0,
    numberTicketsOfUser,
    numberTicketsForGen0,
    canClaimForGen0,
    numberTokensOfUser,
  } = userInfos || {}

  const {
    maxPerAddress,
    maxPerTransaction,
    maxSupply,
    pricePerTicket,
    saleStatus,
    totalTicketsDistributed,
    totalSupplyMinted,
    startTimestamp,
  } = eventInfos || {}

  return (
    <StyledSquadHeaderContainer
      pt={['16px', null, null, '40px']}
      px={['16px', null, null, '80px']}
      flexDirection="column"
      alignItems="center"
    >
      <StyledSquadTitle my="32px" color={lightColors.primary} bold textAlign="center">
        {t('Shadow Puppet')}
      </StyledSquadTitle>
      <Text color={lightColors.warning} textAlign="center" bold>
        {`${t('Presale:')} To Be Announced`}
      </Text>
      <Text color={lightColors.warning} textAlign="center" bold>
        {`${t('Public Sale:')} To Be Announced`}
      </Text>
      <Text color={lightColors.warning} textAlign="center" bold>
        {t('Mint Cost: %minCost% CORE each', {
          minCost: DEFAULT_CAKE_COST,
        })}
      </Text>
      <Text color={lightColors.warning} textAlign="center" bold>
        {t('Max per wallet: %maxPerWallet%', { maxPerWallet: DEFAULT_MAX_TICKETS })}
      </Text>
      <Text color={lightColors.warning} textAlign="center">
        {t('ShadowSwap’s first official Unique NFT collection coming soon.')}
      </Text>
      <Text color={lightColors.warning} mb={!displayEventBlock ? '80px' : '32px'} textAlign="center">
        {t('Join the shadows.')}
      </Text>
      {displayEventBlock && (
        <StyledSquadEventBorder mb="56px">
          <StyledSquadEventContainer m="1px" p="32px">
            <Flex flexDirection={['column', null, 'row']}>
              {eventInfos && (
                <Box mr={['0', null, null, '100px']}>
                  <Timeline
                    events={nftSaleConfigBuilder({
                      t,
                      saleStatus,
                      startTimestamp,
                    })}
                    useDark={false}
                  />
                </Box>
              )}
              <Flex flexDirection="column">
                {eventInfos && (
                  <>
                    <PreEventText t={t} userStatus={userStatus} saleStatus={saleStatus} />
                    <SaleProgress
                      t={t}
                      userStatus={userStatus}
                      saleStatus={saleStatus}
                      totalTicketsDistributed={totalTicketsDistributed}
                      maxSupply={maxSupply}
                      totalSupplyMinted={totalSupplyMinted}
                    />
                    {userInfos && (
                      <MintText
                        t={t}
                        userStatus={userStatus}
                        saleStatus={saleStatus}
                        numberTicketsOfUser={numberTicketsOfUser}
                        numberTokensOfUser={numberTokensOfUser}
                      />
                    )}
                    {userInfos && (
                      <CtaButtons
                        t={t}
                        account={account}
                        theme={theme}
                        userStatus={userStatus}
                        saleStatus={saleStatus}
                        numberTokensOfUser={numberTokensOfUser}
                        canClaimForGen0={canClaimForGen0}
                        maxPerAddress={maxPerAddress}
                        maxSupply={maxSupply}
                        numberTicketsOfUser={numberTicketsOfUser}
                        numberTicketsUsedForGen0={numberTicketsUsedForGen0}
                        totalSupplyMinted={totalSupplyMinted}
                        cakeBalance={cakeBalance}
                        maxPerTransaction={maxPerTransaction}
                        numberTicketsForGen0={numberTicketsForGen0}
                        pricePerTicket={pricePerTicket}
                        ticketsOfUser={ticketsOfUser}
                        startTimestamp={startTimestamp}
                      />
                    )}
                  </>
                )}
                {isLoading &&
                  (userStatus === UserStatusEnum.UNCONNECTED ? (
                    <ConnectWalletButton />
                  ) : (
                    <img src="/images/woof.gif" alt="WoofSwap" className="Shadow-Gif" width="200px" />
                  ))}
              </Flex>
            </Flex>
          </StyledSquadEventContainer>
        </StyledSquadEventBorder>
      )}
      <StyledWaveContainer bottom="-3px">
        <HeaderBottomWave isDark={isDark} />
      </StyledWaveContainer>
    </StyledSquadHeaderContainer>
  )
}

export default PancakeSquadHeader
