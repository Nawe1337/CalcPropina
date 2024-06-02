import { menuItems } from "./data/db"
import { MenuItem } from "./components/MenuItem";
import { useOrder } from "./hooks/useOrder";
import { OrderContent } from "./components/OrderContent";
import { OrderTotal } from "./components/OrderTotal";
import { TipPercentageFrom } from "./components/TipPercentageFrom";

function App() {
const {addItem,order,removeItem,tip,setTip,placeOrder} = useOrder()

  return (
    <>
<header className="bg-teal-400 py-5">
  <h1 className="text-center text-4xl font-black ">Calculadora de propinas y consumo</h1>
</header>
<main className="max-w-7xl mx-auto py-20 grid grid-cols-2">
<div className="p-5">
<h2 className="font-bold text-4xl "> Menu </h2>
<div className="space-y-3 mt-10">
{menuItems.map(item => (

<MenuItem
key={item.id}
item={item}
addItem={addItem}

/>
))}

</div>
</div>

<div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ">
{order.length> 0 ? (

  <>

<OrderContent
order={order}
removeItem={removeItem}
/>

<TipPercentageFrom
setTip={setTip}
tip={tip}/>

<OrderTotal
order={order}
tip={tip}
placeOrder = {placeOrder}

/>
  </>
): ( <p className="text-center">la orden esta vacia </p>)}

</div>
</main>
    </>
  )
}

export default App
