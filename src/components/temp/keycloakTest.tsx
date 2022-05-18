import button from "../fragments/Button";
import Button from "../fragments/Button";
import {useKeycloak} from "@react-keycloak/web";

const KcToken = () => {
    const {keycloak, initialized} = useKeycloak();

    const token: string | undefined = keycloak.authenticated ? keycloak.token : "Not authenticated"

    return (
        <p>{token}</p>
    )
};

export default KcToken;