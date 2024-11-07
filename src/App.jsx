import { useRef, useState } from "react"

function App() {
  const inputRef= useRef();
  const handleInput = (e) => {
    const keyword = inputRef.current.value;

    if(!keyword || keyword.trim()){
      return;
    }

    if(e.key === "Enter" || e.key === "click"){
      e.preventDefault();
    }
  }

  const [province, setProvince] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);

  return (
    <>
      <Form>
        <input onKeyDown={() => handleInput} placeholder="masukan jumlah.."></input>
      </Form>
    </>
  )
}

export default App
