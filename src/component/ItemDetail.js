import React, { useState, useEffect } from 'react'

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [itemDetail, setItemDetail] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchItem.json();
        console.log("ITEM", item.data)
        setItemDetail(item.data.item)
    }
    return (
        <div>
            <h1>{itemDetail.name}</h1>
            <h3>{itemDetail.description}</h3>
            <img src={itemDetail.images.icon}></img>
        </div>
    )
}

export default ItemDetail
