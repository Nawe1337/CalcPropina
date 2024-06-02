import { formatCurrency } from "../helpers"
import { MenuItems, orderItem } from "../types"

type orderContentsProps = {
    order: orderItem[]
    removeItem:(id:MenuItems['id']) => void

}

export const OrderContent = ({order,removeItem}:orderContentsProps) => {
  return (
    <div>

        <h2 className="font-black text-4xl"> consumo</h2>
        <div className="space-y-3 mt-10">{order.map(item => (
            <div key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
             <div className="mt-4">   
                <p className=" text-lg">{item.name} - {formatCurrency(item.price)}</p>
                
                <p className="font-black">
                cantidad : {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
               </div> 
                <button onClick={()=> removeItem(item.id)} className="bg-red-600  h-8 w-8 rounded-full  text-white font-black  ">X</button>
            
            </div>
        ))}</div>
    </div>
  )
}
