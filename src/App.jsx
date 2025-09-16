import './App.css'
import AppNavBar from './AppNavBar'

import img_2 from "./assets/images/shoes2.jpg"

import bg_png from './assets/images/bg.png';
import { Container, Col, Row } from 'react-bootstrap';

import data from './data/data';
import { useState } from 'react';
function App() {
  // 상품 정보를 갖는 product 스테이트를 만든다.
  const [product, setProduct] = useState(data);

  return (
    <>
      <AppNavBar />
      {/*메인 대문사진 영역 시작 */}
      <div className='main-bg'
        style={{
          backgroundImage: `url('${bg_png}')`
        }}
      />
      <Container>
        <Row>
          <Col className="text-center">
            <img src="https://zzzmini.github.io/images/shoes1.jpg"
              width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col className="text-center">
            <img src={img_2}
              width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col className="text-center">
            <img src="/images/shoes3.jpg"
              width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </>


  )
}

export default App
