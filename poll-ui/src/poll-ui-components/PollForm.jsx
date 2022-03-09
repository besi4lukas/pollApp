import React from "react";


export const PollForm = () => {
    return (
        <div className="column">
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-medium is-link is-fullwidth">Submit - To Create Poll</button>
                </div>
            </div>
        </div>
    );
}