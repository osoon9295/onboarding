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
    <div>
      <h2>프로필 수정</h2>
      <form onSubmit={handleUpdateProfile}>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          placeholder="닉네임"
          minLength={1}
          maxLength={10}
          onChange={(e) => setNickname(e.target.value)}
        />
        <label htmlFor="avatar">이미지</label>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default MyPage;
