import { useRoles } from "../../../hooks/useAuth";
import { isDispositor, isDirector } from "../../../helpers/authHelper";
import DispositorHome from "./DispositorHome";
import AdminHome from "./AdminHome";
import GuestHome from "./GuestHome";

import { useState } from "react";

const Tmp = () => {
  const [st, setSt] = useState(false);

  return (
    <>
      <button onClick={e => setSt(!st)}>Potem mnie usuniecie</button>
      {st ? <AdminHome /> : <DispositorHome />}
    </>
  );
};

const Home = () => {
  const roles = useRoles();

  if (isDispositor(roles)) {
    return <Tmp />;
  } else if (isDirector(roles)) {
    return <Tmp />;
  } else {
    return <GuestHome />;
  }
};

export default Home;
