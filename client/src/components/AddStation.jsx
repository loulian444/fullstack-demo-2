import { useNavigate } from "react-router-dom";

const AddStation = ({ token }) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Add Station</h1>
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};

export default AddStation;
