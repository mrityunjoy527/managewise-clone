function Card4(props) {

    const {feedback, imgUrl, name, designation} = props.customer;

    return <div key={props.id} className="card4">
        <p>{`"${feedback}"`}</p>
        <div className="card4-bottom">
            <img src={imgUrl} alt="" />
            <div className="card4-details">
                <p>{name}</p>
                <p>{designation}</p>
            </div>
        </div>
    </div>;
}

export default Card4;