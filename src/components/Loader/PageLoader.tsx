import styled from 'styled-components'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <Wrapper>
      <img src="/images/woof.gif" alt="WoofSwap" className="Shadow-Gif" width="200px" />
    </Wrapper>
  )
}

export default PageLoader
