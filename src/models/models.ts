export type LoginInputs = {
  Username: string
  Password: string
}

export interface RegisterInputs {
  fullName: string,
  instagram: string,
  shopName: string,
  shopType: string,
  email?: string,
  address?: string,
  postCode?: string,
}

export interface User {
  Username: string
  Password: string
}

export interface useAuthReturnType {
  userCredentials: User | null
  isAuthenticated: boolean
  login: (data: LoginInputs) => void
  logout: () => void
  errorMessage: string | undefined
}

