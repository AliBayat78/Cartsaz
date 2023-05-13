export interface UserInfo {
  Username: string
  Password: string
  VitrinUrl: string
}

export interface localStorageCurrentUser {
  Username: string
  VitrinUrl: string
}

export interface RegisterInputs {
  fullName: string
  User: UserInfo
  instagram: string
  shopName: string
  shopType: string
  email?: string
  address?: string
  postCode?: string
}
export interface useAuthReturnType {
  userCredentials: UserInfo | null
  login: (data: UserInfo) => void
  logout: () => void
  errorMessage: string | undefined
}

export type ProductCardTypes = {
  imageSource: string
  title: string
  description: string
  price: string
  showProduct: boolean
  id: number
  productCode?: string
  category?: string
  logo?: string
}

export interface VitrinProductsTypes {
  showAllProducts: boolean
  products: ProductCardTypes[]
}

export interface callInforMationTypes {
  phoneNumber: string
  instagramId: string
  waNumber: string
  telegramId: string
  shopAddress: string
  showContactInfo: boolean
}
