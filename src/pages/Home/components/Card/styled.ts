import styled from 'styled-components'

export const CardContainer = styled.div`
  min-width: 25.6rem;
  max-width: 25.6rem;

  background: ${({ theme }) => theme['base-800']};
  border-radius: 6px 36px;
  padding: 2rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 12rem;
    height: 12rem;
    position: absolute;
    top: -2rem;
  }
`

export const Tags = styled.div`
  margin-top: calc(11.2rem - 2rem);

  display: flex;
  flex-direction: row;
  gap: 0.4rem;

  > span {
    background: ${({ theme }) => theme['yellow-100']};
    color: ${({ theme }) => theme['yellow-700']};
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
  }
`

export const Title = styled.span`
  margin-top: 1.6rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme['base-200']};
`

export const Description = styled.span`
  margin-top: 0.8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme['base-400']};
  text-align: center;
`

export const BuyContainer = styled.div`
  width: 100%;
  margin-top: 3.3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.div`
  color: ${({ theme }) => theme['base-300']};

  span {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  span + span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2.4rem;
    color: ${({ theme }) => theme['base-300']};
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
`

export const AddToCartButton = styled.button`
  line-height: 0;
  border: none;
  padding: 0.8rem;
  background: ${({ theme }) => theme['purple-700']};
  border-radius: 0.6rem;
  transition: 0.2s background;

  cursor: pointer;

  > svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.white};
  }

  &:hover {
    background: ${({ theme }) => theme['purple-400']};
  }
`
