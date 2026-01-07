import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        
        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
          {user.email[0].toUpperCase()}
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Welcome 👋
        </h1>

        <p className="text-gray-600 mb-6">{user.email}</p>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="w-full py-2 bg-red-500 text-white rounded-lg font-semibold
                     hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
