import React from "react";


export const PollSelect = ({setItems, items}) => {
    const onSelectChange = (event) => {
        setItems(event.target.value);
    }
    return (
        <>
            <div class="field">
                <label class="label">Number of Items to Poll</label>
                <div class="control">
                    <div class="select">
                        <select onChange={onSelectChange} value={items}>
                            <option value={0}>Select dropdown</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>
                    
                </div>
                <i style={{fontSize: '12px'}}>you can only poll up to 4 items</i>
            </div>
        </>
    );
}