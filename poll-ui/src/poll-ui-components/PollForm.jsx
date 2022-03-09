import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PollForm = () => {
    return (
        <div className="column">
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                        {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <a href='/' class="button is-medium is-link">Submit - To Create Poll</a>
                </div>
            </div>
        </div>
    );
}