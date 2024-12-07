import React, {useState} from "react";
import {Book} from "./type.ts";

const App: React.FC = () => {
  // 책 데이터
  const [bookList, setBookList] = useState<Book[]>([]);
  const [inputData, setInputData] = useState({
    name: "",
    author: "",
    price: 0,
    introduce: "",
  })
  // inputData 입력 메서드
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      name: e.target.value,
    })
  }
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      author: e.target.value,
    })
  }
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      price: Number(e.target.value),
    })
  }
  const handleIntroduceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      introduce: e.target.value,
    })
  }
  // bookList에 값 넣기
  const addBookInfo = () => {
    setBookList([
      ...bookList,
      {
        id: bookList.length + 1,
        name: inputData.name,
        author: inputData.author,
        price: inputData.price,
        introduce: inputData.introduce
      }
    ])
    // inputData 초기화
    setInputData({
      name: "",
      author: "",
      price: 0,
      introduce: "",
    })
  }

  return (
    <div>
      <div className="add-book-info">
        <input type="text" name="name" placeholder="도서명 입력" onChange={handleNameChange}/> <br/>
        <input type="text" name="author" placeholder="저자 입력" onChange={handleAuthorChange}/> <br/>
        <input type="number" name="price" placeholder="가격 입력" onChange={handlePriceChange}/> <br/>
        <input type="text" name="introduce" placeholder="책 소개 입력" onChange={handleIntroduceChange}/> <br/>
        <button onClick={addBookInfo}>추가하기</button>
      </div>
    </div>
  )
}

export default App
