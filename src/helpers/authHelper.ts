import Keycloak from "keycloak-js";

// Keycloak config
export const keycloakClient = new Keycloak({
  url: "",//"http://172.21.40.111:8081",
  realm: "dev",
  clientId: "frontend"
});

// Returns current session token
export const getToken = () => {
  return keycloakClient.authenticated ? keycloakClient.token : "";
};

// Returns true if user is authenticated
export const isAuth = () => {
  return keycloakClient.authenticated;
};
