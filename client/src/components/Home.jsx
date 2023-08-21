import AuthForm from "./AuthForm";
import ShowInfo from "./ShowInfo";

const Home = ({ token, setToken }) => {
  const clickHandler = () => {
    localStorage.removeItem("token");
    setToken(localStorage.getItem("token"));
  };

  return (
    <>
      <h1>REACT TRAIN APP</h1>
      <p>Choo Choo!</p>

      {token ? <button onClick={clickHandler}>Sign Out</button> : ""}

      {token ? <ShowInfo token={token} /> : <AuthForm setToken={setToken} />}
    </>
  );
};

export default Home;
