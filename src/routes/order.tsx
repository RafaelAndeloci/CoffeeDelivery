import purchasedBg from '../assets/purchased-bg.png'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Order() {
  return (
    <div className="mx-auto mt-20 max-w-[1120px] px-4">
      <h1 className="mb-1 font-display text-4xl font-extrabold text-yellow-dark">
        Uhul! Pedido confirmado
      </h1>
      <p className="text-xl text-base-subtitle">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="grid items-end gap-24 md:grid-cols-2">
        <div className="mt-10 w-fit rounded-[6px_36px] bg-gradient-to-r from-yellow to-purple p-px">
          <div className="flex flex-col gap-8 rounded-[6px_36px] bg-background p-10 text-base-text">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple p-2 text-white">
                <MapPin size={16} weight="fill" />
              </div>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>Av. Dr. Plínio de Castro Prado, 288</strong>
                </p>
                <p>Jardim Palma Travassos - Ribeirão Preto, SP</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-yellow p-2 text-white">
                <Timer size={16} weight="fill" />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-yellow-dark p-2 text-white">
                <CurrencyDollar size={16} />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de crédito</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={purchasedBg} alt="" role="presentation" />
      </div>
    </div>
  )
}
