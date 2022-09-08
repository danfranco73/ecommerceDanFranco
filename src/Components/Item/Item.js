import data from "../ItemListContainer/Data";
const Item = ({nombre, precio, imagen}) => {
  return (
    (<>
      <img width={'200px'} src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>{precio}</h3>
    </>)
  );
};

export default Item;
