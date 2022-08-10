import { isDispositor, isDirector } from "../../../helpers/authHelper";
import DispositorHome from "./DispositorHome";
import AdminHome from "./AdminHome";
import GuestHome from "./GuestHome";

const Home = () => {
  if (isDispositor()) {
    return <DispositorHome />;
  } else if (isDirector()) {
    return <AdminHome />;
  } else {
    return <GuestHome />;
  }
};

export default Home;
