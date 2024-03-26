import {create} from 'zustand'

interface ProductState {
  TapItems:any;
  setTapItems :any ; 
  TapItemValues:any;
  setTapItemValues :any ; 
}

export const useProductVarianState = create<ProductState>((set) => ({
  TapItems:[],
  setTapItems: (data : any) => set(() => ({ TapItems: data })),
  TapItemValues:[],
  setTapItemValues: (data : any) => set(() => ({ TapItemValues: data })),
}));
