import React from 'react'
import styled from 'styled-components'

const backgroundStyle: string = `
  background-image: linear-gradient(90deg, rgba(4, 202, 255, 1), rgba(144, 245, 154, 1));
`

const Wrapper = styled.header`
  ${backgroundStyle}
  padding: 1.5rem 0;
`

const Title = styled.p`
  font-size: 3.6rem;
  padding: 0;
  margin: 0;
`

const Header = () => {
  return (
    <Wrapper>
      <Title>ワードカウンター</Title>
    </Wrapper>
  )
}

export default Header