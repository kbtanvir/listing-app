import { RolesEnum } from "../../../users/data/users.enitity";
import { AuthDTOs } from "../dto/auth.dto";

export namespace AuthEntity {
  export type session = Pick<AuthDTOs, "accessToken" | "refreshToken">;

  export type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    isVerified: boolean;
    role: RolesEnum;
  };

  export interface Store {
    user: User | null;
    isAuthenticated: boolean;
    session: session | null;
  }
}
