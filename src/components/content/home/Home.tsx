import { isDispositor } from "../../../helpers/authHelper";
import DispositorHome from "./DispositorHome";
import GuestHome from "./GuestHome";

const Home = () => {
  if (isDispositor()) {
    return <DispositorHome />;
  } else {
    return <GuestHome />;
  }
};

export default Home;
