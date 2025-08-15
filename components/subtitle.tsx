const Subtitle = ({text}) => {
    return(
        <>
            <div className="subtitle">
                {`${text}`}
                <hr/>
            </div>
            <style jsx>{`
                .subtitle{
                    color: #fff;
                    font-weight: bold;
                    font-size: 25px;
                    padding-left: 4rem;
                }
                hr{
                    background: #6474FC;
                    padding: 0;
                    height: 8px;
                    margin: 0;
                    width: 2rem;
                    border: #6474FC;
                    position: absolute;
                    left: 3rem;
                }
            `}</style>
        </>
    );
};

export default Subtitle;