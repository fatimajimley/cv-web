const Subtitle = ({text, colorText, background,paddingLeft, left}) => {
    return(
        <>
            <div className="subtitle">
                {`${text}`}
                <hr/>
            </div>
            <style jsx>{`
                .subtitle{
                    color: ${colorText};
                    font-weight: bold;
                    font-size: 25px;
                    padding-left: ${paddingLeft};
                }
                hr{
                    background: ${background};
                    padding: 0;
                    height: 8px;
                    margin: 0;
                    width: 2rem;
                    border: ${background};
                    position: absolute;
                    left: ${left};
                }
            `}</style>
        </>
    );
};

export default Subtitle;