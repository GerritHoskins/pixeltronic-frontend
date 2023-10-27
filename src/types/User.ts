interface UserDetails {
  id: null | string;
  email: null | string;
  token: null | string;
  role: null | string;
}

interface User {
  user: UserDetails;
  jwt: string;
}

interface AuthRequestParams {
  email: string;
  password: string;
}

export type { User, UserDetails, AuthRequestParams };
