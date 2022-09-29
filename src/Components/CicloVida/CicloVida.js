import { useEffect, useState } from "react";

const CicloVida = ({ validacion }) => {
    const [contador, setContador] = useState(0);
  useEffect(() => {
   /*  console.log("running when component is mounted"); */
  }, []);
  //when the props change
  useEffect(
    () => {
       /*  console.log("me ejecuto cuando se actualiza las props"); */
    },[validacion]);
    
  // when the state changes

  // before the component is mounted
/*   console.log("before the component is mounted"); */
  return (
    <div>{validacion === true ? <h2>verdadero</h2> : <h2>es falso</h2>}</div>
  );
};

export default CicloVida;
