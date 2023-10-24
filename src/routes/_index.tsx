import backgroundImg from '../assets/background.png'
import coffeeDeliveryImg from '../assets/coffee-delivery-bg.png'

import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from '@phosphor-icons/react'

import { CoffeeItem } from '../components/CoffeeItem'

export function Index() {
  return (
    <div>
      <div className="relative mx-auto max-w-[1440px]">
        <img
          src={backgroundImg}
          className="absolute z-[-1] select-none"
          alt=""
          role="presentation"
        />

        <div className="mx-auto max-w-[1120px] px-4">
          <section className="flex flex-col gap-14 py-[5.75rem] lg:flex-row">
            <div>
              <h1 className="mb-4 font-display text-4xl font-extrabold text-base-text md:text-5xl">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-xl text-base-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul className="mt-16 grid gap-x-10 gap-y-5 md:grid-cols-[repeat(2,_auto)]">
                <li className="flex items-center gap-3 text-base-text">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-dark text-white">
                    <ShoppingCart size={16} weight="fill" />
                  </div>
                  Compra simples e segura
                </li>
                <li className="flex items-center gap-3 text-base-text">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-base-text text-white">
                    <Package size={16} weight="fill" />
                  </div>
                  Embalagem mantém o café intacto
                </li>
                <li className="flex items-center gap-3 text-base-text">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow text-white">
                    <Timer size={16} weight="fill" />
                  </div>
                  Entrega rápida e rastreada
                </li>
                <li className="flex items-center gap-3 text-base-text">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple text-white">
                    <CoffeeIcon size={16} weight="fill" />
                  </div>
                  O café chega fresquinho até você
                </li>
              </ul>
            </div>

            <img
              src={coffeeDeliveryImg}
              alt="Copo descartável da Coffee Delivery com grãos de café atrás"
              className="max-w-md select-none lg:max-w-none"
            />
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-4">
        <section className="py-8">
          <h2 className="mb-4 font-display text-[2rem] font-extrabold text-base-text">
            Nossos cafés
          </h2>

          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
            <CoffeeItem
              id={1}
              name={'Expresso Tradicional'}
              description={
                'O tradicional café feito com água quente e grãos moídos'
              }
              price={3.5}
              category={['tradicional']}
              imageUrl="/images/expresso.png"
            />

            <CoffeeItem
              id={2}
              name={'Expresso Americano'}
              description={'Expresso diluído, menos intenso que o tradicional'}
              price={3.5}
              category={['tradicional']}
              imageUrl={'/images/americano.png'}
            />
          </ul>
        </section>
      </div>
    </div>
  )
}
