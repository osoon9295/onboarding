import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>로그인</h2>
      <LoginForm />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로 다시 이동
      </button>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default Login;
