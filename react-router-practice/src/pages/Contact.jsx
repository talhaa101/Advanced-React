import { useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate();

  return (
    <div>

      <h1>Contact Page</h1>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>

       <button onClick={() => navigate(-1)}>
        Back
      </button>

      <button onClick={() => navigate(1)}>
        Forward
      </button>
    </div>
  );
}

export default Contact;