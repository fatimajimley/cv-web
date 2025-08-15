const ContainerInfo = ({text, colorBorder, colorText}) => {
    return(
        <>
            <div className="container">
                <p>{text}</p> 
            </div>
            <style jsx>{`
                .container{
                    margin-bottom: 2rem;
                    padding: 2%;
                    text-align: center;
                    font-weight: bold;
                    color: #fff;
                    border: solid 4px ${colorBorder};
                }
                @media (min-width: 768px) {
                    .container{
                        width: 30%;
                    }
                }
                @media (min-width: 1024px) {
                    .container{
                        width: 25%;
                    }
                }
            `}</style>
        </>
    );
};

export default ContainerInfo;