export interface UserInfo {
  Username: string
  Password: string
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

export interface Products {
  
}