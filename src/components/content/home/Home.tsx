import { useRoles } from "../../../hooks/useAuth";
import { isDispositor, isDirector } from "../../../helpers/authHelper";
import DispositorHome from "./DispositorHome";
import AdminHome from "./AdminHome";
import GuestHome from "./GuestHome";

// Home page component
const Home = () => {
  const roles = useRoles();

  if (isDirector(roles)) {
    return <AdminHome />;
  } else if (isDispositor(roles)) {
    return <DispositorHome />;
  } else {
    return <GuestHome />;
  }
};

export default Home;
