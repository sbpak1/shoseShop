import { useNavigate } from "react-router-dom";

function Product({shoes}) {
  const image = `/images/shoes${shoes.id + 1}.jpg`
  const navigate = useNavigate();
  return (
    <>
      <img src={image} onClick={()=>{navigate(`/detail/${shoes.id+1}`)}} width="80%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
    </>
  );
}
export default Product;