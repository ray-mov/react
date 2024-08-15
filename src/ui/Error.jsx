import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const error = useRouteError()
    
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message || error.data}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Error;
