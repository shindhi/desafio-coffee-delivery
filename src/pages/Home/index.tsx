import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import imgCafe from '../../assets/imagem-cafe.png'
import { BannerContainer, BannerContent, BannerItems } from './styles'
import { BannerItem } from './BannerItem'

export function Home() {
  return (
    <>
      <BannerContainer>
        <BannerContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BannerItems>
            <BannerItem
              text="Compra simples e segura"
              icon={ShoppingCart}
              bgIcon="yellow-700"
            />
            <BannerItem
              text="Embalagem mantém o café intacto"
              icon={Package}
              bgIcon="base-300"
            />
            <BannerItem
              text="Entrega rápida e rastreada"
              icon={Timer}
              bgIcon="yellow-400"
            />
            <BannerItem
              text="O café chega fresquinho até você"
              icon={Coffee}
              bgIcon="purple-400"
            />
          </BannerItems>
        </BannerContent>

        <img src={imgCafe} alt="" />
      </BannerContainer>
      <div>corpo</div>
    </>
  )
}
