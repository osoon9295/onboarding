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
    }
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
    }

    const { userId, nickname, avatar } = await login({ id, password });
    setUser({ userId, nickname, avatar });

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleLoginFormSubmit}>
        <label htmlFor="id">아이디</label>
        <input type="email" value={id} onChange={handleIdChange} />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
