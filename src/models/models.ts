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

export type ProductCartTypes = {
  imageSource: string
  title: string
  description: string
  price: string
}
