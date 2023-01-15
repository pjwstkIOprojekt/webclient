export enum Roles {
  None = 0,
  User = 1, // User = 1
  Paramedic = 3, // Paramedic = 2
  Dispatcher = 5, // Dispatcher = 4
  AmbulanceManager = 11, // AmbulanceManager = 8
  Admin = 31 // Admin = 16
}

// Roles values operations
const rolesTable: Record<string, Roles> = {
  "ROLE_USER": Roles.User,
  "ROLE_EMPLOYEE": Roles.User,
  "ROLE_MEDIC": Roles.Paramedic,
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

// User definition
export interface User {
  token: string,
  roles: Roles,
  email: string,
  userId: number
}

// Helper functions
const userCookie = "usr";
export const login = (usr: Readonly<User>) => sessionStorage.setItem(userCookie, JSON.stringify(usr));
export const logout = () => sessionStorage.clear();
export const getUser = () => JSON.parse(sessionStorage.getItem(userCookie) ?? "null") as User | null;
export const getToken = () => getUser()?.token;
export const getRoles = () => getUser()?.roles;
export const getEmail = () => getUser()?.email;
export const getUserId = () => getUser()?.userId;
export const isAuth = (roles: Roles) => (roles & Roles.User) !== Roles.None;
export const isDispositor = (roles: Roles) => (roles & (Roles.Dispatcher - Roles.User)) !== Roles.None;
export const isDirector = (roles: Roles) => (roles & (Roles.AmbulanceManager - Roles.Paramedic)) !== Roles.None;
