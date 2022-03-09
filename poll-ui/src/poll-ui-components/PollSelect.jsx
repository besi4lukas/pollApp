import React from "react";


export const PollSelect = ({setItems, items}) => {
    const onSelectChange = (event) => {
        setItems(event.target.value);
    }
    return (
        <>
            <div class="field">
                <div class="control">
                    <div class="select">
                        <select onChange={onSelectChange} value={items}>
                            <option value={0}>No Items to Poll</option>
                            <option value={1}>Poll 1 Item</option>
                            <option value={2}>Poll 2 Items</option>
                            <option value={3}>Poll 3 Items</option>
                            <option value={4}>Poll 4 Items</option>
                        </select>
                    </div>
                    
                </div>
                <i style={{fontSize: '12px'}}>you can only poll up to 4 items</i>
            </div>
        </>
    );
}