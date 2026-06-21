import { useEffect, useState } from "react";

const CategoryCard = (props) => {
    const {category, showItems, handleToggle} = props;
    //Unontrolled component: Managing its own state
    // const [ isToggled, setIsToggled] = useState(false);

        

   
    return (
        <div className="w-6/12 mx-auto shadow-lg my-3">
            <div className=" bg-gray-200 font-bold px-2 h-9  ">
                <div className="cursor-pointer flex justify-between w-full align-middle" onClick={() => { handleToggle()}}>
                    <h2>{category?.card?.card?.title} ({category?.card?.card?.itemCards.length }) </h2>
                    {showItems ? '🔼' : '🔽'}
                    
                </div>
            </div>
            <div className="bg-gray-50 px-2">
                { showItems &&
                    category?.card?.card?.itemCards.map((item) => {
                        return <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
                    })
                   
                }

            </div>

        </div>
    );

}

export default CategoryCard;