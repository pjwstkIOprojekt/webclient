export interface User {
  token: string,
  roles: string[]
}

export const login = (usr: User) => sessionStorage.setItem("usr", JSON.stringify(usr));
export const logout = () => sessionStorage.clear();
export const getUser = () => JSON.parse(sessionStorage.getItem("usr") ?? "null") as User | null;
export const getToken = () => getUser()?.token;
export const getRoles = () => getUser()?.roles;

export const checkRole = (role: string) => {
  const roles = getRoles();
  return roles ? roles.includes(role) : false;
};

export const isAuth = () => checkRole("USER");
export const isDispositor = () => checkRole("USER");
export const isDirector = () => checkRole("USER");
