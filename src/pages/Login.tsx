import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-[500px] h-[500px] mx-auto mt-10 border-2 rounded-2xl">
      <h2 className="text-3xl">로그인</h2>
      <LoginForm />
      <div className="flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="h-[35px] w-[145px] bg-gray-200 rounded-xl"
        >
          홈으로 이동
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="h-[35px] w-[125px] text-white bg-black  rounded-xl"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;
