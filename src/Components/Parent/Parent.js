
const Parent = ({children, esUnComponente}) => {
   
  return (
    <>
    {esUnComponente()}
    <div>{children}</div> {/* si es 1 solo no se pone indice por que es un objeto */}
    </>
  )
}

export default Parent