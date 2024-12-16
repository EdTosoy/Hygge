import React from "react";
import { useNavigate } from "react-router-dom";

const YourComponent = () => {
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(0, { replace: true });
  };

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={reloadPage}>Reload Page</button>
      {/* ...existing code... */}
    </div>
  );
};

export default YourComponent;
