import styled from 'styled-components'

const BG_ICON: { [key: string]: string } = {
  'base-300': 'base-300',
  'yellow-400': 'yellow-400',
  'yellow-700': 'yellow-700',
  'purple-400': 'purple-400',
} as const

interface ItemContainerProps {
  bgIcon: keyof typeof BG_ICON
}

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  span {
    background: ${({ theme, bgIcon }) => theme[BG_ICON[bgIcon]]};
    border-radius: 50%;
    padding: 0.8rem;
    line-height: 0;

    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.white};
    }
  }
`
