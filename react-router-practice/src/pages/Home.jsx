import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={goToAbout}>Go To About Page</button>

      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <button onClick={() => navigate(1)}>
        Forward
      </button>
    </div>
  );
}

export default Home;
