import Router from "./shared/Router";
import { useTestData } from "./hooks/useTest";

function App() {
  const { data, isPending, isError } = useTestData();

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  console.log("data", data);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
