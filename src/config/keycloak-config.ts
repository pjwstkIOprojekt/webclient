import Keycloak from "keycloak-js";

const keycloakConfig = {
    url: 'http://localhost:8081',
    realm: 'dev',
    clientId: 'frontend'
}
const kc = new Keycloak(keycloakConfig);

export default kc