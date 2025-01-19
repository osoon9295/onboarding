import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { login } from "../api/auth.api";
import useUserStore from "../stores/user.store";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore((state) => state);

  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const { userId, nickname, avatar } = await login({ id, password });
    setUser({ userId, nickname, avatar });

    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleLoginFormSubmit}
        className="flex flex-col items-center justify-center gap-4 w-[280px]"
      >
        <div className="flex flex-col justify-center gap-2 h-[150px]">
          <div className="flex w-[280px] justify-between">
            <label htmlFor="id">아이디</label>
            <input
              type="email"
              value={id}
              onChange={handleIdChange}
              className="border-[2px] rounded-md"
            />
          </div>
          <div className="flex w-[280px] justify-between">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border-[2px] rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-100 w-[280px] h-[40px] rounded-xl"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
