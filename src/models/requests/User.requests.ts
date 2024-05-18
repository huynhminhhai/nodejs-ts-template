import { JwtPayload } from 'jsonwebtoken'
import { extend } from 'lodash'
import { TokenType, UserVerifyStatus } from '~/constants/enums'

// TOKEN PAYLOAD
export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
  verify: UserVerifyStatus
  exp: number
  iat: number
}

// REGISTER
export interface RegisterRequestBody {
  name: string
  email: string
  password: string
  confirm_password: string
  date_of_birth: string
}
