import { useEffect, useState } from "react";
import { IUserModel } from "../../redux/models/user.model";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";

const LoginView = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number>(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<IUserModel[]>("http://localhost:3000/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const handleLogin = () => {
    const selectedUser = users.find((user) => user.u_id === selectedUserId);
    if (selectedUser) dispatch(onLogin(selectedUser));
    localStorage.setItem("currentUser", JSON.stringify(selectedUser));
    navigate("/");
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-1/2">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user-select"
            >
              Select a user :
            </label>
            <select
              id="user-select"
              onChange={(e) => setSelectedUserId(Number(e.target.value))}
              className={`shadow-sm appearance-none rounded w-full py-2 ps-8 text-gray-700 mb-2 leading-tight focus:border-black focus:border-2 active:border-black focus:shadow-outline}`}
            >
              {users.map((user, index) => (
                <option key={index} value={user.u_id}>
                  {user.u_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleLogin()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
