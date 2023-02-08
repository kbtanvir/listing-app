export interface JwtPayload {
  type: string;
  exp: number;
  iat: number;
}

export class JWTService {
  public decodeToken(token: string): any {
    const actualToken = token.split(".")[1];

    if (!actualToken) return null;

    return JSON.parse(window.atob(actualToken));
  }

  public isExpired(token: string): boolean {
    const user: JwtPayload = this.decodeToken(token);
    const now = new Date().getTime() / 1000;
    return user.exp < now;
  }
}

export const jwtService = new JWTService();
