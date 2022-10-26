import { useParams, Navigate } from "react-router-dom";
import StaffUserForm from "./StaffUserForm";

const EditStaffUser = () => {
  const { userId } = useParams();

  if (!userId) {
    return <Navigate to="../staff" replace />;
  }

  return <StaffUserForm />;
};

export default EditStaffUser;
