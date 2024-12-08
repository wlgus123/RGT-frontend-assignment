import React, {useState} from "react";
import {Book} from "./type.ts";

const App: React.FC = () => {
  // 책 데이터
  const [bookList, setBookList] = useState<Book[]>([]);
  const [inputData, setInputData] = useState({
    name: "",
    author: "",
    price: "",
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
      price: e.target.value,
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
        price: Number(inputData.price),
        introduce: inputData.introduce
      }
    ])
    console.log(bookList);
    // inputData 초기화
    setInputData({
      name: "",
      author: "",
      price: "",
      introduce: "",
    })
  }

  return (
    <div>
      {/* 책 정보 추가 */}
      <div className="add-book-info">
        <input type="text" name="name" placeholder="도서명 입력" value={inputData.name} onChange={handleNameChange}/>
        <input type="text" name="author" placeholder="저자 입력" value={inputData.author} onChange={handleAuthorChange}/>
        <input type="number" name="price" placeholder="가격 입력" value={inputData.price} onChange={handlePriceChange}/>
        <input type="text" name="introduce" placeholder="책 소개 입력" value={inputData.introduce} onChange={handleIntroduceChange}/>
        <button onClick={addBookInfo}>추가하기</button>
      </div>

      {/* 책 리스트 */}
      <div>
        <ul>
          {bookList.map((book) => (
            <li key={book.id}>
              <strong>{book.name}</strong> - {book.author} ({book.price}원) <br/>
              소개: {book.introduce}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
