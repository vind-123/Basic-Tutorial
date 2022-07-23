import React from 'react'
const Menu=({itemso})=>
{
    return(
        <div className="section-center">
            {itemso.map((menuItem)=>{
            
                const {id,title,img,desc,price}=menuItem;
                return(
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className='photo'>

                        </img>
                        <div className="items-info">
                            <header>
                            <h4>{title}</h4>
                            <h4 className="price">${price} </h4>
                        </header>
                        <p className="items-text">{desc}</p>
                        </div>
                    </article>
                )

            })}
        </div>
    ) 
}
export default Menu