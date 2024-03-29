import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        const newItem = new Item(name)
        this.list.push(newItem)
    }
    @action editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name === itemName)
        item.location = newLocation
    }

    @action deleteItem = (itemName) => {
        let itemNames = this.list.map(i => i.name)
        let index = itemNames.indexOf(itemName,0)
        this.list.splice(index,1)
    } 
}

