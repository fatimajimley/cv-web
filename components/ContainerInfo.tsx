const ContainerInfo = ({text, colorBorder, colorText}) => {
    return(
        <>
            <div className="container">
                <p>{text}</p> 
            </div>
            <style jsx>{`
                .container{
                    margin-bottom: 2rem;
                    text-align: justify;
                    font-weight: lighter;
                    color: #fff;
                    border: solid 4px ${colorBorder};
                }
                @media (min-width: 768px) {
                    .container{
                        width: 50%;
                    }
                }
            `}</style>
        </>
    );
};

export default ContainerInfo;