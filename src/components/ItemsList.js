import { useState } from "react";
import CategoryCard from "./CategoryCard";
const ItemsList = (props) => {
    const { categoryCards } = props;

    const [showIndex, setShowIndex] = useState(0);


    return (
        <div >
            <div >
                {categoryCards.length > 0 ? categoryCards.map((category, index) => {
                    {/* making the child controlled component : Managing the state here  */}
                    return <CategoryCard 
                            key={category?.card?.card?.categoryId} 
                            category={category} 
                            showItems= {index == showIndex ? true : false}  //this determines which accordion to open
                             handleToggle = {()=> {
                                //showIndex = index of the currently open accordion.  
                                // index = index of the accordion that was just clicked.
                                // if open accordion clicked again, it will be now closed. else if another one clicked its gets open
                                index == showIndex ? setShowIndex(null) : setShowIndex(index)    
                            }} 
                        />

                }) : <p>No menu items found.</p>}
            </div>
        </div>



    )

}

export default ItemsList;