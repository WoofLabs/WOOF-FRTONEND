import styled from 'styled-components'
import { Button, Heading, Text } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import Link from 'next/link'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = ({ statusCode = 404 }: { statusCode?: number }) => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
      <img src="/images/woof-icon.png" alt="ShadowSwap" className="mobile-icon" width="64px" />
        <Heading scale="xxl">{statusCode}</Heading>
        <Text mb="16px">{t('Oops, page not found. Work in Progress Follow our Socials for Development updates')}</Text>
        <Link href="/" passHref>
          <Button as="a" scale="sm">
            {t('Back Home')}
          </Button>
        </Link>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
