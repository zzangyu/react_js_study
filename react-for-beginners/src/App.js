import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []); // []の中に何もないので基準がなくて一回だけ実行される
  useEffect(() => {
      console.log("I run when 'keyword' changes.");
  }, [keyword]); // keywordの値が変わったら実行
  useEffect(() => {
      console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
      console.log("I run when 'counter and keyword' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}> CLick me</button>
    </div>
  );
}


export default App;
