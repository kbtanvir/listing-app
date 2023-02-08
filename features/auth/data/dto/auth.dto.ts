export type AuthDTOs = {
  id: string;
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
  name: string;
  phone: string;
  code: string;
  passwordResetMethod: "email" | "phone";
  refreshToken: string;
  accessToken: string;
  orgName: string;
  orgPhone: string;
  shortBio: string;
  secondaryEmail: string;
  createdAt: string;
  updatedAt: string;
  otpCode: number;
  otpCodeExpiredAt: string;
  resetPasswordOtpCode: number;
  resetPasswordOtpCodeExpiredAt: string;
  isVerified: boolean;
  role: string;
};

export type LoginDTO = Pick<AuthDTOs, "email" | "password">;
export type RegisterDto = Pick<
  AuthDTOs,
  "email" | "password" | "repeatPassword" | "name"
>;
export type ForgotPasswordDTO = Pick<AuthDTOs, "email">;
export type PasswordResetMethodDTO = Pick<AuthDTOs, "passwordResetMethod">;
export type RefreshTokenDto = Pick<AuthDTOs, "refreshToken">;
export type UserDetailsDTO = Pick<
  AuthDTOs,
  "id" | "email" | "firstName" | "lastName"
>;
export type OPTVerificationDTO = Pick<AuthDTOs, "email" | "code">;
export type ResetPasswordDTO = Pick<AuthDTOs, "password" | "repeatPassword">;
export type ResetPasswordReqDTO = Pick<AuthDTOs, "email">;
