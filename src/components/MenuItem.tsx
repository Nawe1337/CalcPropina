import type { MenuItems } from "../types"

type menuItemProps = {
    item:MenuItems,
    addItem:(item:MenuItems) => void,
   
}

export const MenuItem = ({item,addItem}:menuItemProps ) => {

  return (
    <>
    <button onClick={()=> addItem(item) } className="border-2 border-teal-400 hover:bg-teal-200 w-full  p-3 flex justify-between">
    <div>{item.name}</div>
    <p className="font-black">$ {item.price}</p>
    </button>
    </>
  )

}