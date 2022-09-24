import "./items.css";

const Item = ({ nombre, imagen }) => {
  return (
      <div className="item-box">
        <div className="size">
          <img className="item-img" src={imagen} alt={nombre} />
        </div>
        <div className="item-desc">
          <p>{nombre}</p>
        </div>
      </div>
  );
};

export default Item;
