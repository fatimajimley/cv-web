const Cards = ({title, point, icon}) => {
    const fullCircles = Math.floor(point);
    const hasHalf = point % 1 !== 0
    return(
        <>
            <div className="card">
                {icon && (
                    <div className="iconContainer">
                        <div className="icon"></div>
                    </div>
                )}
                <div className="container">
                    <h4>{title}</h4>
                    {Array.from({ length: fullCircles }).map((_, i) => (
                        <div key={i} className="circle"></div>
                    ))}
                    {hasHalf && <div className="halfCircle"></div>}
                </div>
            </div>
            <style jsx>{`
                .card{
                    padding-top: 2rem;
                    width: 100px;
                    margin-right:5rem;
                }
                .iconContainer{
                    height: 100px;
                    width:100px;
                    background: linear-gradient(#fff, transparent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .icon{
                    height: 80px;
                    width: 80px;
                    background-image: url(${icon});
                    background-repeat: no-repeat;
                    background-size: contain;
                }
                .container h4{
                    color: #fff;
                    margin: 0;
                }
                .circle {
                    float: left;
                    width: 10px;
                    height: 10px;
                    margin: 2px;
                    // shape-outside: circle(50% at 30%);
                    clip-path: circle();
                    background: #D61C75;
                }
                .halfCircle {
                    float: left;
                    margin:2px;
                    width: 10px;
                    height: 10px;
                    background: conic-gradient(
                        transparent 0deg 180deg,
                        #d61c75 180deg 360deg
                    );
                    clip-path: circle();
                }
                @media (min-width: 768px) {
                    .card{
                        width: 150px;
                    }
                    .iconContainer{
                        height: 150px;
                        width:150px;
                    }
                    .icon{
                        height: 100px;
                        width: 100px;
                    }
                    .circle {
                        width: 20px;
                        height: 20px;
                    }
                    .halfCircle {
                        width: 20px;
                        height: 20px;
                    }
                }
                @media (min-width: 1024px) {
                    // .headerTitle{
                    //    position: relative;
                    // }
                }
            `}</style>
        </>
    );
};

export default  Cards;