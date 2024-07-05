import { produceWithPatches } from 'immer'
import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 8rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['yellow-700']};
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme['base-200']};
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10.2rem;
`

export const Info = styled.div`
  --purple-400: ${({ theme }) => theme['purple-400']};
  --yellow-400: ${({ theme }) => theme['yellow-400']};

  width: 100%;
  margin-top: 4rem;
  border: 1px solid;
  border-color: transparent;
  border-radius: 6px 36px;
  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    var(--yellow-400),
    var(--purple-400)
  );
`

export const InfoWrapper = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme['base-900']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;

  span {
    color: ${({ theme }) => theme.white};
    line-height: 0;
    border-radius: 50%;
    padding: 0.8rem;
  }

  div {
    color: ${({ theme }) => theme['base-300']};
  }
`
