import Trains from "./Trains";
import AuthForm from "./AuthForm";

const Home = ({ token, setToken }) => {

  return (
    <>
      <h1>REACT TRAIN APP</h1>
      <p>Choo Choo!</p>

      {token ? <button onClick={() => setToken(false)}>Sign Out</button> : ""}

      {token ? <Trains token={token} /> : <AuthForm setToken={setToken} />}
    </>
  );
};

export default Home;
