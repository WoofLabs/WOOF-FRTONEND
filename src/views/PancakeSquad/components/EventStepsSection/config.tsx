import { Button } from '@pancakeswap/uikit'
import { SaleStatusEnum, UserStatusEnum } from 'views/PancakeSquad/types'
import BuyTicketsButtons from '../Buttons/BuyTickets'
import EndEventButtons from '../Buttons/EndEvent'
import MintButton from '../Buttons/Mint'
import ReadyText from '../Header/ReadyText'
import { EventStepsType } from './types'
import { getStepperStatus } from './utils'

const stepsConfigBuilder = ({ t, userInfos, eventInfos, userStatus, account, theme, cakeBalance }: EventStepsType) => {
  const { maxPerAddress, maxPerTransaction, maxSupply, pricePerTicket } = eventInfos || {}
  const {
    canClaimForGen0,
    ticketsOfUser,
    numberTicketsUsedForGen0,
    numberTicketsOfUser,
    numberTicketsForGen0,
    numberTokensOfUser,
  } = userInfos || {}

  const { saleStatus, totalTicketsDistributed, totalSupplyMinted, startTimestamp } = eventInfos || {}

  const hasProfileActivated = [UserStatusEnum.PROFILE_ACTIVE, UserStatusEnum.PROFILE_ACTIVE_GEN0].includes(userStatus)
  const isBuyPhaseFinished = totalTicketsDistributed === maxSupply
  const isMintingFinished = totalSupplyMinted === maxSupply
  const hasData = !!eventInfos && !!userInfos

  return [
    {
      id: 1,
      status: getStepperStatus({
        saleStatus,
        hasProfileActivated,
        eventStatus: [SaleStatusEnum.Pending, SaleStatusEnum.Premint],
      }),
      title: t('Hold CORE'),
      bodyText: [t('Each NFT costs CORE to mint. Remember you also need CORE to cover transaction fees too!')],
      buttons: (
        <>
          <Button
            as="a"
            // href="https://shadowswap.xyz/swap?outputCurrency=0x5c44d3d2312aba4d5f2406a98bf374bc76455092&chainId=1116"
            href="#"
            target="_blank"
            width="100%"
          >
            {t('Buy CORE')}
          </Button>
        </>
      ),
    },
    {
      id: 2,
      status: getStepperStatus({
        saleStatus,
        hasProfileActivated,
        eventStatus: [SaleStatusEnum.Presale, SaleStatusEnum.Sale],
      }),
      title: t('Buy Shadow Tickets'),
      bodyText: [
        t('Buy Shadow Tickets, while stocks last. You’ll use them in step 3.'),
        `TBA ${t('Pre-sale:500 NFTs will be avaliable for Pre-sale')}`,
        `TBA ${t('Public Sale: Any wallet can purchase up to 10 Shadow Tickets, while stocks last.')}`,
      ],
      buttons: (
        <>
          {hasData && (
            <BuyTicketsButtons
              t={t}
              account={account}
              theme={theme}
              userStatus={userStatus}
              saleStatus={saleStatus}
              canClaimForGen0={canClaimForGen0}
              maxPerAddress={maxPerAddress}
              numberTicketsOfUser={numberTicketsOfUser}
              numberTicketsUsedForGen0={numberTicketsUsedForGen0}
              cakeBalance={cakeBalance}
              maxPerTransaction={maxPerTransaction}
              numberTicketsForGen0={numberTicketsForGen0}
              pricePerTicket={pricePerTicket}
              startTimestamp={startTimestamp}
            />
          )}
          {isBuyPhaseFinished && hasData && <ReadyText mt="16px" text={t('Phase Complete!')} />}
        </>
      ),
    },
    {
      id: 3,
      status: getStepperStatus({
        saleStatus,
        hasProfileActivated,
        eventStatus: [SaleStatusEnum.Claim],
        numberTicketsOfUser,
      }),
      title: t('Claim Phase'),
      bodyText: [
        t(
          'During this phase, any wallet holding a Shadow Ticket can redeem their ticket to claim a Shadow Puppet NFT.',
        ),
      ],
      buttons: (
        <>
          {hasData && (
            <MintButton
              t={t}
              theme={theme}
              saleStatus={saleStatus}
              numberTicketsOfUser={numberTicketsOfUser}
              numberTokensOfUser={numberTokensOfUser}
              ticketsOfUser={ticketsOfUser}
            />
          )}
          {isMintingFinished && hasData && <ReadyText mt="16px" text={t('Phase Complete!')} />}
        </>
      ),
    },
    {
      id: 4,
      status: getStepperStatus({
        saleStatus,
        hasProfileActivated,
        eventStatus: [SaleStatusEnum.Claim],
        isLastPhase: true,
      }),
      title: t('Wait for the Reveal'),
      bodyText: [
        t(
          'It’ll take a few days before your Puppet’s image is revealed. Just hold tight and wait for the final image!',
        ),
        t('Trading will open before the images are live, but you’ll still be able to check the Puppets’ stats.'),
      ],
      buttons: (
        <>
          {hasData && (
            <EndEventButtons
              t={t}
              saleStatus={saleStatus}
              userStatus={userStatus}
              maxSupply={maxSupply}
              totalSupplyMinted={totalSupplyMinted}
              numberTokensOfUser={numberTokensOfUser}
              account={account}
            />
          )}
        </>
      ),
    },
  ]
}

export default stepsConfigBuilder
