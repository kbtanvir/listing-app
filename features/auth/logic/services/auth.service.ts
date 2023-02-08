import axios from "axios";
import {
  LoginDTO,
  OPTVerificationDTO,
  RefreshTokenDto,
  ResetPasswordDTO,
  ResetPasswordReqDTO,
} from "../../data/dto/auth.dto";
import { AuthEntity } from "../../data/types/auth.entity";
import { authInitial, authStore } from "../auth.store";
import httpService from "./axios.interceptor";
import { jwtService } from "./jwt.service";

export enum APIEndpoints {
  login = "/auth/login",
  register = "/auth/register",
  refreshToken = "/auth/refresh-token",
  logout = "/auth/logout",
  test = "/auth/test",
  requestChangePassword = "/auth/request-change-password",
  changePassword = "/auth/change-password",
  verifyOPT = "/auth/confirm-opt",
}

export class AuthService {
  constructor() {}

  public async login(dto: LoginDTO) {
    const res = (await httpService.post(APIEndpoints.login, dto)) as any;
  
   

    const session: AuthEntity.session = res.data;

    this.updateSession(session);
  }
  public async register(dto: LoginDTO) {
    const res = await httpService.post(APIEndpoints.register, dto);
    if (!res)
      throw {
        message: "Something went wrong",
        error: true,
      };
    const session: AuthEntity.session = res.data;
    return this.updateSession(session);
  }
  public async testAuth(dto: { test: string }) {
    await httpService.post(APIEndpoints.test, dto);
  }
  public async refreshToken(dto: RefreshTokenDto): Promise<AuthEntity.session> {
    try {
      const res = await axios.post(APIEndpoints.refreshToken, dto);
      const session: AuthEntity.session = res.data;

      this.updateSession(session);

      return session;
    } catch (error) {
      this.clearSession();
      throw error;
    }
  }
  public async logout() {
    await httpService.post(APIEndpoints.logout);
    this.clearSession();
  }
  public async resetPassword(dto: ResetPasswordDTO) {
    const accessToken = authStore.getState().session?.accessToken;

    const user = jwtService.decodeToken(accessToken!);
    const res = (await httpService.post(APIEndpoints.changePassword, {
      ...dto,
      uid: user.id,
    })) as any;

    if (res.error) {
      throw {
        message: res.data.message,
        error: true,
        data: null,
      };
    }

    return res;
  }
  public async requestChangePass(dto: ResetPasswordReqDTO) {
    let res = await httpService.post(APIEndpoints.requestChangePassword, dto);


    return res.data;
  }
  async verifyOPT(dto: OPTVerificationDTO) {
    const res = (await httpService.post(APIEndpoints.verifyOPT, dto)) as any;

    if (res.error) {
      throw {
        message: res.data.message,
        error: true,
        data: null,
      };
    }

    const session: AuthEntity.session = res.data.tokens;

    authStore.setSession(session);
  }
  public getSession(): AuthEntity.session | null {
    return authStore.getState().session;
  }
  public clearSession(): void {
    authStore.setState(authInitial);
  }
  public updateSession(session: AuthEntity.session): AuthEntity.User {
    const user = jwtService.decodeToken(session.accessToken);
    authStore.setState((state: any) => ({
      ...state,
      session,
      isAuthenticated: true,
    }));
    return user;
  }
}

export const authService = new AuthService();
