export const login = (token: string, roles: Set<string>) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("roles", JSON.stringify(roles));
};

export const logout = () => sessionStorage.clear();
export const getToken = () => sessionStorage.getItem("token");

const checkRole = (role: string) => {
  const roles = sessionStorage.getItem("roles");

  if (roles) {
    const arr = JSON.parse(roles) as string[];
    return arr.includes(role);
  }

  return false;
};

export const isAuth = () => checkRole("USER");
export const isDispositor = () => false;
export const isDirector = () => false;
