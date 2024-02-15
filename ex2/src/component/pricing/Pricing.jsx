import  Plan  from "../plan/Plan";



export function Pricing({title, desc, plans}) {

    let handler = function(){
        console.log("click");
    }

    return (
        <div class="offer">
            <div className="offer-section">
                <h2 className="offer-section__title">{title}</h2>
                <p className="offer-section__description">{desc}</p>
                <div className="offer-section__description">
                    <label className="switch" htmlFor="">
                        <input onClick={handler} type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>

                <div class="box">
                    {plans.map((plan, index) => (
                        <Plan key={index} label ={plan.name} price={plan.price} advantage={plan.advantage}/>
                    ))}
                </div>
            </div>
        </div>
    )
}