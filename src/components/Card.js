const Card = (props) => {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <section className="card">
            {badgeText && <div className="card-badge" >SOLD OUT</div>}
            <img src={`../images/${props.coverImg}`} alt="katie" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray"> ({props.stats.reviewCount}) • </span>
                <span className="gray"> {props.location}</span>
                <p className="card--title">{props.title}</p>
                <p className="card-price"><strong>From ${props.price}</strong> / person</p>
            </div>
        </section>
    )
}

export default Card
