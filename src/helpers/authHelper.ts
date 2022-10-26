export enum Roles {
  None = 0,
  User = 1
}

const rolesTable: Record<string, Roles> = {
  "USER": Roles.User
};

export const stringsToRoles = (src: Readonly<string[]>) => {
  let res = Roles.None;

  for (const str in rolesTable) {
    if (src.includes(str)) {
      res |= rolesTable[str];
    }
  }

  return res;
};

export interface User {
  token: string,
  roles: Roles,
  email: string
}

export const login = (usr: Readonly<User>) => sessionStorage.setItem("usr", JSON.stringify(usr));
export const logout = () => sessionStorage.clear();
export const getUser = () => JSON.parse(sessionStorage.getItem("usr") ?? "null") as User | null;
export const getToken = () => getUser()?.token;
export const getRoles = () => getUser()?.roles;
export const getEmail = () => getUser()?.email;
export const isAuth = (roles: Roles) => (roles & Roles.User) !== Roles.None;
export const isDispositor = (roles: Roles) => (roles & Roles.User) !== Roles.None;
export const isDirector = (roles: Roles) => (roles & Roles.User) !== Roles.None;
