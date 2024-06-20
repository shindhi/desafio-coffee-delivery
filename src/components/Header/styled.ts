import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3.2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`

const BaseButton = styled.button`
  background: transparent;
  border: none;
  line-height: 0;
  padding: 0.8rem;
  border-radius: 0.6rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  cursor: pointer;

  svg {
    font-size: 2.2rem;
  }
`

interface CartButtonProps {
  itemsQuantity: number
}

export const CartButton = styled(BaseButton)<CartButtonProps>`
  background: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-700']};
  font-size: 1.4rem;
  position: relative;

  &::after {
    content: '${({ itemsQuantity }) => itemsQuantity}';
    position: absolute;
    top: calc(1rem - 2rem);
    right: calc(1rem - 2rem);
    width: 2rem;
    height: 2rem;
    background: ${({ theme }) => theme['yellow-700']};
    color: ${({ theme }) => theme.white};
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 50%;
    line-height: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const LocationButton = styled(BaseButton)`
  background: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-700']};
`
