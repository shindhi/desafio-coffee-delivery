import { ElementType } from 'react'
import { IconProps } from 'phosphor-react'

import { ItemContainer } from './styled'

interface BannerItemProps {
  text: string
  bgIcon: 'yellow-400' | 'yellow-700' | 'base-300' | 'purple-400'
  icon: ElementType<IconProps>
}

export function BannerItem({
  text,
  icon: Icon,
  bgIcon = 'base-300',
}: BannerItemProps) {
  return (
    <ItemContainer bgIcon={bgIcon}>
      <span>
        <Icon weight="fill" />
      </span>
      {text}
    </ItemContainer>
  )
}
