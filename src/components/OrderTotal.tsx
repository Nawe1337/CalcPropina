import { useCallback } from "react"
import {  orderItem } from "../types"
import { formatCurrency } from "../helpers"


type orderTotalProps = {
  tip: number,
  order: orderItem[],
  placeOrder: () => void

}
export const OrderTotal = ({order,tip,placeOrder}:orderTotalProps) => {
 /// useMemo y useCallback hacen exactamente lo mismo solo que cambia su sintaxis
  const subTotal = useCallback(()=> order.reduce((total,item) => total+ (item.quantity * item.price ),0) ,[order])
  const tipAmount = useCallback(()=> subTotal() * tip, [tip, order])
  const total = useCallback(()=> subTotal()+tipAmount(),[tip,order])

  return (<>
    <div className="space-y-3">
      <h2 className="font-black text-3xl">Totales y propina: </h2>
      <p>Subtotal a pagar:
        <span className="font-bold"> {formatCurrency(subTotal())}</span>
      </p>

      <p>Propina:
        <span className="font-bold"> {formatCurrency(tipAmount())}</span>
      </p>

      <p>Total a pagar:
        <span className="font-bold"> {formatCurrency(total())}</span>
      </p>
    </div>
    <button className="bg-black border p-3 uppercase font-bold text-white w-full border-solid rounded-full disabled:opacity-10 "
    disabled={total() === 0}
    onClick={placeOrder}
    >Guardar pago </button>
    </>
  )
}
