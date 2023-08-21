import AuthForm from "./AuthForm";
import ShowInfo from "./ShowInfo";

const Home = ({ token, setToken }) => {

  return (
    <>
      <h1>REACT TRAIN APP</h1>
      <p>Choo Choo!</p>

      {token ? <button onClick={() => setToken(false)}>Sign Out</button> : ""}

      {token ? <ShowInfo token={token} /> : <AuthForm setToken={setToken} />}
    </>
  );
};

export default Home;
