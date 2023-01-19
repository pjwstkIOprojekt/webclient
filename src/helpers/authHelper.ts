export enum Roles {
  None = 0,
  User = 1,
  Employee = 2,
  Paramedic = 4,
  Dispatcher = 8,
  AmbulanceManager = 16,
  Admin = 32
}

// Roles values operations
const rolesTable: Record<string, Roles> = {
  "ROLE_USER": Roles.User,
  "ROLE_EMPLOYEE": Roles.Employee,
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
export const hasRole = (roles: Roles, required: Roles) => (roles & required) !== Roles.None;
export const isAuth = (roles: Roles) => roles !== Roles.None;
export const isDispositor = (roles: Roles) => roles !== Roles.None;
export const isDirector = (roles: Roles) => roles === Roles.None;
