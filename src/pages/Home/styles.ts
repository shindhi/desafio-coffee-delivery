import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding: 9.2rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5.6rem;
`

export const BgBanner = styled.img`
  width: 100vw;
  height: 100%;
  max-height: 55.4rem;
  object-fit: cover;

  position: absolute;
  top: 9.2rem;
  left: 0;
`

export const BannerContent = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 130%;
  }

  p {
    color: ${({ theme }) => theme['base-200']};
    font-size: 2rem;
    margin-top: 1.6rem;
    padding-bottom: 6.6rem;
  }
`

export const BannerItems = styled.div`
  padding-right: 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 2rem;
`

export const ListCoffeeContainer = styled.div``
