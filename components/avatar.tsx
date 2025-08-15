const Avatar = () => {
    return (
        <>
            <div className="container">
                <div className="circle"></div>
                <div className="avatar"></div>
            </div>

            <style jsx>{`
                // mobile
                .container {
                    position: relative;
                    width: 250px;
                    height: 250px;
                    margin: 5% auto;
                }
                .avatar {
                    background-image: url("./images/avatar-fat.png");
                    width: 250px;
                    height: 250px;
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    border: 2px solid #6474FC;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 2;
                    top: 10px;
                    left: 10px;
                }
                .circle {
                    position: absolute;
                    z-index: 1;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background-color: #6474FC;
                }

                /*Tablet y más grande */
                @media (min-width: 768px) {
                    .container {
                        width: 300px;
                        height: 300px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: inherit;
                    }
                    .avatar {
                        width: 250px;
                        height: 250px;
                        top: 25px;
                        left: 25px;
                    }
                    .circle {
                        width: 250px;
                        height: 250px;
                    }
                }

                /*Escritorio grande */
                @media (min-width: 1024px) {
                    .container {
                        width: 400px;
                        height: 400px;
                        margin: inherit;
                    }
                    .avatar {
                        width: 300px;
                        height: 300px;
                        top: 65px;
                        left: 65px;
                    }
                    .circle {
                        width: 300px;
                        height: 300px;
                    }
                }
            `}</style>
        </>
    );
};

export default Avatar;
