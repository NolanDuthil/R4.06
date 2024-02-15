import { useState } from "react";
import Plan from "../plan/Plan";

export default function Pricing({title, description, plans, cb_buy}) {

    const [leasing, setLeasing] = useState(false);

    let handler = function() {
        setLeasing(!leasing);
    }

    
    let popup = function(){
        alert('You choose the ${label} plan');
    }

    return (
        <div className="offer">
            <div className="offer-section">
                <h2 className="offer-section__title">{title}</h2>
                <p className="offer-section__description">{description}</p>
                <div className="offer-section__description">
                    <label className="switch" >
                        <input onClick={handler} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="box">
                    {plans.map((plan, index) => (
                        <Plan key={index} label={plan.name} 
                        price={leasing ? plan.price.leasing : plan.price.buy} 
                        advantages={plan.advantages}
                        handler={popup}/>
                    ))}
                </div>
            </div>
        </div>
    )
}