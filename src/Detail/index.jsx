import { useNavigate, useParams } from "react-router-dom";

function Detail({product}){
  // detail/3 -> pathvariable 값을 확인...
  // hook : useParams
  // 파라미터를 변수로 저장할 때는 중괄호 사용 필수
  let {id} = useParams(); // 애는 문자 값
  const navigate = useNavigate();
 
  // 가져온 Pathvariable값을 -> 숫자
  // props로 전달받은 product 배열에서 해당하는 객체만 찾아요...
  const findProduct = product.find(item => {
    return item.id === Number(id-1);
  })

  // 해당하는 제품이 존재하지 않을 때 처리
  if (findProduct == null){
    alert('찾는 상품이 없습니다.')
    // 바로 이전 페이지로 이동
    // history.back(); - 자바스크립트 용
    navigate(-1);
    return null;
  }


  console.log(findProduct)
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`/images/shoes${findProduct.id+1}.jpg`}
            width="100%" />
        </div>
        <div className="col-md-6">
          <h4>{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}
export default Detail;