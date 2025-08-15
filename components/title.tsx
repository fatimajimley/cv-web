const Title = ({ text, color,borderColor,aling }) => {
    return(
        <>  
            <h2 className="textBorder">
                {text}
            </h2>
            <h2 className="principalText">
                {text}
            </h2>
            
            <style jsx>{`
                .textBorder{
                    font-size: 3em;
                    margin: 0;
                    position: absolute;
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke: 1px ${borderColor};
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: ${borderColor};
                    z-index: 0;
                }
                .principalText{
                    margin: 0;
                    font-size: 2em;
                    align-self: ${aling};
                    color: ${color};
                    z-index: 1;
                }
                @media (min-width: 768px) {
                    .textBorder{
                        font-size: 4em;
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

export default Title;
