import { CreditCard, CurrencyDollar, MapPinLine } from '@phosphor-icons/react'

import { Button } from '../components/Button'
import { CartItem } from '../components/CartItem'
import { CepInput, Input } from '../components/Input'
import { Radio } from '../components/Radio'
import { useCart } from '../hooks/useCart'

export function Checkout() {
  const { data: cart } = useCart()

  return (
    <form className="mx-auto grid max-w-[1120px] gap-8 px-4 py-10 lg:grid-cols-[1fr_400px]">
      <div className="order-2 md:order-1">
        <h2 className="mb-4 font-display text-lg font-bold text-base-title">
          Complete seu pedido
        </h2>

        <fieldset className="rounded-md border-0 bg-base-card fill-yellow p-6 lg:p-10">
          <div className="flex gap-2">
            <MapPinLine size={22} fill="inherit" />
            <div className="flex flex-col gap-[0.125rem]">
              <legend className="text-base-subtitle">
                Endereço de entrega
              </legend>
              <p className="text-sm text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <CepInput
              type="text"
              placeholder="CEP"
              className="grow basis-[200px] md:grow-0"
            />

            <Input type="text" placeholder="Rua" className="w-full" />

            <div className="flex w-full flex-wrap gap-4">
              <Input
                type="text"
                placeholder="Número"
                className="grow basis-[200px] md:grow-0"
              />
              <Input
                type="text"
                placeholder="Complemento"
                className="grow"
                optional
              />
            </div>

            <Input
              type="text"
              placeholder="Bairro"
              className="grow basis-[200px] md:grow-0"
            />
            <Input type="text" placeholder="Cidade" className="grow" />
            <Input type="text" placeholder="UF" className="w-[60px]" />
          </div>
        </fieldset>

        <fieldset className="mt-3 rounded-md border-0 bg-base-card fill-purple p-6 lg:p-10">
          <div className="flex gap-2">
            <CurrencyDollar size={22} fill="inherit" />
            <div className="flex flex-col gap-[0.125rem]">
              <legend className="text-base-subtitle">Pagamento</legend>
              <p className="text-sm text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:flex-row">
            <Radio name="paymentMethod" value="credit-card">
              <CreditCard size={16} fill="inherit" />
              Cartão de crédito
            </Radio>

            <Radio name="paymentMethod" value="debit-card">
              <CreditCard size={16} fill="inherit" />
              Cartão de débito
            </Radio>

            <Radio name="paymentMethod" value="money">
              <CreditCard size={16} fill="inherit" />
              Dinheiro
            </Radio>
          </div>
        </fieldset>
      </div>

      <div className="order-1 md:order-2">
        <h2 className="mb-4 font-display text-lg font-bold text-base-title">
          Cafés selecionados
        </h2>

        <section className="flex flex-col gap-6 rounded-[6px_36px] border-0 bg-base-card p-6 lg:p-10">
          {cart?.map(cartItem => (
            <CartItem
              key={cartItem.id}
              product={cartItem.product}
              quantity={cartItem.quantity}
            />
          ))}

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-base-text">
              <span>Total de itens</span>
              <span>R$ 100,00</span>
            </div>
            <div className="flex items-center justify-between text-sm text-base-text">
              <span>Entrega</span>
              <span>R$ 3.50</span>
            </div>
            <div className="flex items-center justify-between text-xl font-bold text-base-subtitle">
              <span>Total</span>
              <span>R$ 103,50</span>
            </div>
          </div>

          <div>
            <Button>Confirmar pedido</Button>
          </div>
        </section>
      </div>
    </form>
  )
}
