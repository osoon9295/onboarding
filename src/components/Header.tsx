import { Outlet, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { getUser } from "../api/auth.api";
import useUserStore from "../stores/user.store";

const Layout = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUserStore((state) => state);

  const handleLogout = useCallback(() => {
    setUser(null);
    // navigate("/login");
    localStorage.clear();
  }, [setUser]);

  useEffect(() => {
    getUser().then((res) => {
      if (res) {
        setUser({ userId: res.id, nickname: res.nickname, avatar: res.avatar });
      } else {
        handleLogout();
      }
    });
  }, [setUser, handleLogout]);

  return (
    <div>
      <div className="bg-red-500">
        {user ? (
          <div>
            <span>user.nickname </span>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div>
            <button onClick={() => navigate("/login")}>로그인</button>
            <button onClick={() => navigate("/signup")}>회원가입</button>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
