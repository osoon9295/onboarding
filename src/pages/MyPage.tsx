import React, { useState } from "react";
import { updateProfile } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/user.store";

const MyPage = () => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const { user, setUser } = useUserStore((state) => state);

  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setAvatar(file);
    } else {
      setAvatar(null);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nickname", nickname);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    const response = await updateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        userId: response.userId,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-[500px] h-[500px] mx-auto mt-10 border-2 rounded-2xl">
      <h2 className="text-3xl">프로필 수정</h2>
      <form
        onSubmit={handleUpdateProfile}
        className="flex flex-col items-center justify-center gap-4 w-[280px]"
      >
        <div className="flex flex-col justify-center gap-2 h-[150px]">
          <div className="flex w-[280px] justify-between">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              minLength={1}
              maxLength={10}
              onChange={(e) => setNickname(e.target.value)}
              className="border-[2px] rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-[280px] justify-between">
            <label htmlFor="avatar">이미지</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border-[2px] rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-100 w-[280px] h-[40px] rounded-xl"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  );
};

export default MyPage;
