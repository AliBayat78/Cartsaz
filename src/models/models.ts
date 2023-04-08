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
  isAuthenticated: boolean
  login: (data: UserInfo) => void
  logout: () => void
  errorMessage: string | undefined
}
