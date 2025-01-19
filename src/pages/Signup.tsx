import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-[500px] h-[500px] mx-auto mt-10 border-2 rounded-2xl">
      <h2 className="text-3xl">회원가입</h2>
      <SignupForm />
      <div className="flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="h-[35px] w-[145px] bg-gray-200 rounded-xl"
        >
          홈으로 이동
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="h-[35px] w-[125px] text-white bg-black  rounded-xl"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Signup;
