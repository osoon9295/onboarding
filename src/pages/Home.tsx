import { useTestData } from "../hooks/useTest";
import { TestDataType } from "../types/test.type";

const Home = () => {
  const { data, isPending, isError } = useTestData();

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className="flex flex-col items-center h-20 gap-3">
      <h1 className="text-xl font-bold">온보딩과제</h1>
      <h2> 테스트 데이터 </h2>
      <ul>
        {data.map((data: TestDataType) => {
          return (
            <div className="w-[100%] flex gap-5">
              <span>{data.id}</span>
              <span>{data.title}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
