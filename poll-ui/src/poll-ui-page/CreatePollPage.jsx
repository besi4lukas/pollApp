import React,{ useEffect, useState} from "react";
import { PollSelect } from '../poll-ui-components/PollSelect';
import { ItemsText} from '../poll-ui-components/ItemsText';
import { PollForm } from '../poll-ui-components/PollForm';

export const CreatePollPage = () => {
    const [items, setItems] = useState(0);
    const [itemsArray, setItemsArray] = useState([]);

    useEffect(()=>{
        const itemsTextArray = [];
        for(let i = 0; i < items; i++){
            itemsTextArray.push(<ItemsText labelNumber={i + 1} key={i}/>);
        }
        setItemsArray(itemsTextArray);
    },[items]);

    return (
        <section className="section">
            <div className="container">
                <div>
                    <div className="columns is-centered" style={{marginBottom:'55px'}}>
                      <PollSelect setItems={setItems} items={items}/>
                    </div>
                    <div className="columns is-centered" style={{marginBottom:'55px'}}>
                        {itemsArray.map(element => element)}
                    </div>
                    <div className="columns is-centered">
                        <PollForm />
                    </div>
                </div>
            </div>
        </section>
    );
}