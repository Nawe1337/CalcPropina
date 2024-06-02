export type MenuItems = {
id:number,
name:string,
price:number

}

export type orderItem = MenuItems & {
quantity : number,
}