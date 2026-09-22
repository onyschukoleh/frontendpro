import { useState } from "react";
import { JediCounter } from "../components/JediCounter";
function Home() {
    const [count, setCount] = useState(10);
  return (
    <>
      <JediCounter count={count} setCount={setCount}/>
    </>
  );
}

export default Home;
