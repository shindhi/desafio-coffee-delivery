import { ElementType } from 'react'
import { IconProps } from 'phosphor-react'

import { HeaderCardContainer } from './styled'
import { defaultTheme } from '../../../../styles/theme/default'

interface HeaderCardProps {
  icon: ElementType<IconProps>
  color: 'yellow-700' | 'purple-400'
  title: string
  description: string
}

export function HeaderCard({
  icon: Icon,
  color: colorIcon = 'yellow-700',
  title,
  description,
}: HeaderCardProps) {
  return (
    <HeaderCardContainer>
      <Icon color={defaultTheme[colorIcon]} weight="regular" />

      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </HeaderCardContainer>
  )
}
