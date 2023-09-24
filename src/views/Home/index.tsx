import styled from 'styled-components'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, nftammSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import RoadmapSection from './components/RoadmapSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
// import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

// const UserBannerWrapper = styled(Container)`
//   z-index: 1;
//   position: absolute;
//   width: 100%;
//   top: 0;
//   left: 50%;
//   transform: translate(-50%, 0);
//   padding-left: 0px;
//   padding-right: 0px;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     padding-left: 24px;
//     padding-right: 24px;
//   }
// `

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  // const { account } = useWeb3React()
  // const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <style jsx global>{`
        #home-1 .page-bg {
          background: radial-gradient(103.12%50%at 50%50%,#21193a 0%,#191326 100%);
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }

        [data-theme='dark'] #home-1 .page-bg {
          background: radial-gradient(103.12%80%at 50%50%,#08060B 0%,#2a2d54 100%);
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }

        @media (max-width: 767px) {
          #home-1 .page-bg {
            background: url('https://raw.githubusercontent.com/SVerseLab/images/master/mobile-background.png');
            background-size: cover;
            background-position: center;
            background-width: 100%;
            background-height: 100vh;
          }
        }

        #home-2 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #9370db 100%);
        }
        [data-theme='dark'] #home-2 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #2a2d54 100%);
        }
        #home-3 .page-bg {
          
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }
        [data-theme='dark'] #home-3 .page-bg {
          
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }

        @media (max-width: 767px) {
          #home-3 .page-bg {
            background: url('https://raw.githubusercontent.com/SVerseLab/images/master/mobile-background.png');
            background-size: cover;
            background-position: center;
            background-width: 100%;
            background-height: 100vh;
          }
        }

        #home-4 .inner-wedge svg {
          fill: #2c1dbb;
        }
        [data-theme='dark'] #home-4 .inner-wedge svg {
          fill: #08003b;
        }

        #home-5 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #000000 100%);
        }
        [data-theme='dark'] #home-5 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #000000 100%);
        }
      `}</style>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {/* {account && chainId === ChainId.BSC && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )} */}
        <MultipleBanner />
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-2',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        containerProps={{
          id: 'home-4',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...nftammSectionData(t)} />
      </PageSection>

      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-5',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradientCardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        {/* <SalesSection {...earnSectionData(t)} />
        <FarmsPoolsRow /> */}

        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-3',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection> */}
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection> */}
    </>
  )
}

export default Home
