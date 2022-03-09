import React from "react";

function Menu({menuItem}){
    return(
        <div className="items">
            {
                menuItem.map((item) => {
                    return <div className="item-container" key={item.id}>
                        <div className="item">
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="text">
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default Menu;