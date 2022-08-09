interface Role {
  id: string;
  name: string;
  description: string;
  type: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
}
