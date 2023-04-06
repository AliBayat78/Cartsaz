export type LoginInputs = {
  Username: string
  Password: string
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
