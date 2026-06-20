import { useState } from "react";
import CategoryCard from "./CategoryCard";
const ItemsList = (props) => {
    const { categoryCards } = props;


    return (
        <div >
            <div >
                {categoryCards.length > 0 ? categoryCards.map((category) => {

                    return <CategoryCard key={category?.card?.card?.categoryId} category={category} />

                }) : <p>No menu items found.</p>}
            </div>
        </div>



    )

}

export default ItemsList;