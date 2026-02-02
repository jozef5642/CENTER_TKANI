import { makeAutoObservable } from "mobx"

interface Type {
  id: number;
  name: string;
}

interface Brand {
  id: number;
  name: string;
}

interface Tkan {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export default class TkanStore {
  private _types: Type[] = [
    {id: 1, name: 'Для дома'},
    {id: 2, name: 'Для шитья'},
  ]

  private _brands: Brand[] = [
    {id: 1, name: 'Египет'},
    {id: 2, name: 'Азия'},
  ]

  private _tkans: Tkan[] = [
    {id: 1, name: 'Двунитка Мокрый Асфальт', price: 500, rating: 5, img:'public/image_wet_asphalt_1.png'},
    {id: 2, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_2.png'},
    {id: 3, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_3.png'},
    {id: 4, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_4.png'},
    {id: 5, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_1.png'},
    {id: 6, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_2.png'},
    {id: 7, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_3.png'},
    {id: 8, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_4.png'}
  ]

  private _selectedType: Type | {} = {}
  private _selectedBrand: Brand | {} = {}

  constructor() {
    makeAutoObservable(this);
  }

  setTypes(types: Type[]): void {
    this._types = types;
  }

  setBrands(brands: Brand[]): void {
    this._brands = brands;
  }

  setTkan(tkans: Tkan[]): void {
    this._tkans = tkans;
  }

  setSelectedType(type: Type): void {
    this._selectedType = type
  }
  
  setSelectedBrand(brand: Brand): void {
    this._selectedBrand = brand
  }

  get types(): Type[] {
    return this._types;
  }

  get brands(): Brand[] {
    return this._brands;
  }

  get tkans(): Tkan[] {
    return this._tkans;
  }

  get selectedType(): Type | {} {
    return this._selectedType
  }

  get selectedBrand(): Brand | {} {
    return this._selectedBrand
  }
}

