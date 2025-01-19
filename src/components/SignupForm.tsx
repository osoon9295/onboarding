import { useState } from "react";
import { register } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSignupFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!id.trim()) {
      alert("아이디를 작성해주세요.");
      return;
    }
    if (!password.trim()) {
      alert("비밀번호를 작성해주세요.");
      return;
    }
    if (!passwordConfirm.trim()) {
      alert("비밀번호 확인란에 비밀번호를 작성해주세요.");
      return;
    }
    if (!nickname.trim()) {
      alert("닉네임을 작성해주세요.");
      return;
    }

    if (password.trim() !== passwordConfirm.trim()) {
      alert("비밀번호가 일치하지 않습니다. 비밀번호를 다시 입력해주세요.");
      return;
    }

    const response = await register({ id, password, nickname });

    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSignupFormSubmit}
        className="flex flex-col items-center justify-center gap-4 w-[280px] "
      >
        <div className="flex flex-col justify-center gap-2 h-[150px]">
          <div className="flex w-[280px] justify-between ">
            <label htmlFor="id">아이디 </label>
            <input
              type="email"
              value={id}
              onChange={handleIdChange}
              className="border-[2px] rounded-md"
            />
          </div>
          <div className="flex w-[280px] justify-between">
            <label htmlFor="password">비밀번호 </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border-[2px] rounded-md"
            />
          </div>
          <div className="flex w-[280px] justify-between">
            <label htmlFor="passwordConfirm">비밀번호 확인 </label>
            <input
              type="password"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              className="border-[2px] rounded-md"
            />
          </div>
          <div className="flex w-[280px] justify-between">
            <label htmlFor="nickname">닉네임 </label>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="border-[2px] rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-100 w-[280px] h-[40px] rounded-xl"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
