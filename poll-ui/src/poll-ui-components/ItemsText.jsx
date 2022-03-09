import React from "react";


export const ItemsText = ({labelNumber}) => {
    return (
        <div className="column">
            <div class="field">
                <label class="label">{`Item #${labelNumber}`}</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Enter an Item" />
                </div>
            </div>
        </div>
    );
}