export enum Roles {
  None = 0,
  User = 1,
  Paramedic = 3,
  Dispatcher = 5,
  AmbulanceManager = 11,
  Admin = 31
}

const rolesTable: Record<string, Roles> = {
  "ROLE_USER": Roles.User,
  "ROLE_PARAMEDIC": Roles.Paramedic,
  "ROLE_DISPATCHER": Roles.Dispatcher,
  "ROLE_AMBULANCE_MANAGER": Roles.AmbulanceManager,
  "ROLE_ADMIN": Roles.Admin
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

const userCookie = "usr";
export const login = (usr: Readonly<User>) => sessionStorage.setItem(userCookie, JSON.stringify(usr));
export const logout = () => sessionStorage.clear();
export const getUser = () => JSON.parse(sessionStorage.getItem(userCookie) ?? "null") as User | null;
export const getToken = () => getUser()?.token;
export const getRoles = () => getUser()?.roles;
export const getEmail = () => getUser()?.email;
export const isAuth = (roles: Roles) => (roles & Roles.User) === Roles.None;
export const isDispositor = (roles: Roles) => (roles & Roles.User) === Roles.None;
export const isDirector = (roles: Roles) => (roles & Roles.User) === Roles.None;
