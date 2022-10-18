import { useRoles } from "../../../hooks/useAuth";
import { isDispositor, isDirector } from "../../../helpers/authHelper";
import DispositorHome from "./DispositorHome";
import AdminHome from "./AdminHome";
import GuestHome from "./GuestHome";

const Home = () => {
  const roles = useRoles();

  if (isDispositor(roles)) {
    return <DispositorHome />;
  } else if (isDirector(roles)) {
    return <AdminHome />;
  } else {
    return <GuestHome />;
  }
};

export default Home;
