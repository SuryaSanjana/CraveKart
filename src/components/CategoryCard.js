import { useEffect, useState } from "react";

const CategoryCard = (props) => {
    const {category} = props;
    const [ isToggled, setIsToggled] = useState(false);
   
    return (
        <div className="my-1">
            <div className="flex justify-between bg-gray-200 ">

                <h2>{category?.card?.card?.title}</h2>
                <button onClick={() => { setIsToggled(!isToggled) }}>
                    {isToggled ? '🔼' : '🔽'}
                </button>

            </div>
            <div className="bg-gray-100">
                {isToggled ?
                    category?.card?.card?.itemCards.map((item) => {
                        return <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
                    })
                    :
                    null
                }

            </div>

        </div>
    );

}

export default CategoryCard;