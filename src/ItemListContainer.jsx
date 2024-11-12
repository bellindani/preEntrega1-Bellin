import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div className='listContainer'>
        <h1 className='titulo'>{greeting}</h1>
        
        <ul className='productos'>
            <li className='producto'>
                Web Gratis
            </li>
            <li className='producto'>
                Tú Web Personalizada
            </li>
            <li className='producto'>
                 Servicio Web Premium
            </li>
        </ul>
    </div>
  )
}

export default ItemListContainer
