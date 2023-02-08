export namespace AppRoutes {
  export const Root = "/";
  export const Auth = {
    Login: "/auth/login",
    Register: "/auth/register",
    Logout: "/auth/logout",
    register: "/auth/register",
    ForgotPassword: "/auth/forgot-password",
    VerificationMethod: "/auth/verification-method",
    OPTVerification: "/auth/opt-verification",
    CheckEmail: "/auth/check-email",
  };
  
  export const ResetPassword= "/reset-password";
  export const Dashboard = {
    baseURL: "/dashboard",
  };

  export const User = {
    baseURL: "/user",
    profile: "/profile",
    step1: "/profile/setup-step-1",
    step2: "/profile/setup-step-2",
    ResetPassword: "/reset-password",
  };

  export const Products = {
    baseURL: "/products",
    collection: "products",
  };
  export const Orders = {
    baseURL: "/orders",
    collection: "orders",
  };
  export const Category = {
    baseURL: "/categories",
    collection: "categories",
  };
  export const Users = {
    baseURL: "/users",
    collection: "users",

    queries: {
      members: "members",
      invites: "invites",
      requests: "requests",
    },
  };
}
