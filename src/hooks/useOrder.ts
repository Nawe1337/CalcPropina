import { useState } from "react"
import type { MenuItems, orderItem } from "../types"



export const useOrder = () => {
const [order ,setOrder]  = useState<orderItem[]>([])
const [tip,setTip] = useState(0);

const addItem= (item:MenuItems) => {
const orderExist = order.find(orderItem => orderItem.id === item.id  )
if (orderExist) {
const updatedOrder = order.map(orderItem => orderItem.id === item.id? { ...orderItem, quantity: orderExist.quantity+1} :orderItem)

setOrder(updatedOrder)


}
else{
  const newItem = {...item,  quantity: 1}
setOrder([...order,newItem])
}
}

const removeItem = (id:MenuItems['id']) =>{

const remove = order.filter(orderItem => orderItem.id !== id)
setOrder(remove)
 
}

const placeOrder = () => {

 setOrder([])
 setTip(0)
     
   }



  return {
order,
tip,
setTip,
addItem,
removeItem,
setOrder,
placeOrder

  }
}
