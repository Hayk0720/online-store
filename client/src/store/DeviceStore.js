import {makeAutoObservable} from "mobx"
export default class DeviceStore {
    constructor(){
        this._types = [
            {id:1, name:'Fridges'},
            {id:2, name: 'Smartphones'},
            {id:3, name: 'Notebooks'},
            {id:4, name: 'TV'}
        ]
        this._brands = [
            {id:1, name:'Samsung'},
            {id:2, name: 'Apple'},
            {id:3, name:'Dell'},
            {id:4, name: 'Toshiba'}
        ]
        this._devices = [
            {id:1, name:'S22', price: 25000, rating: 5, img:""},
            {id:2, name: 'Iphone 14 PRO', price: 25000, rating: 4, img:""},
            {id:3, name:'Iphone 12 PRO', price: 25000, rating: 2, img:""},
            {id:4, name: 'Samsung A51', price: 25000, rating: 3, img:""},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
    this._selectedType = type
    }
    setSelectedBrand(brand){
    this._selectedBrand = brand
    }


    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}