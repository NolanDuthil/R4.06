function Card(name, img, role) {
    <li className="gallery__pic">
                <img src= {img} alt="CEO" className="gallery__image"></img>
                <div className="gallery__div">
                    <img src="bgshapes.svg"></img>
                    <div className="gallery__txt">
                        <h2> {name} </h2>
                        <h3 className="gallery__work"> {role} </h3>
                    </div>
                </div>
            </li>

}

export {Card};