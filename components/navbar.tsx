import Link from "next/link";
import { itemsNavbar } from "../data/itemsNavbar";
import Subtitle from "./subtitle";

const Navbar = () => {
    return(
        <>
            <nav className="navbar">
                <div >
                    {itemsNavbar.map((item) => (
                        <div key={item.id} className="listNav">
                            <Link href={item.link}><Subtitle text={item.title} colorText={"#6474FC"} background={"#6474FC"} left={"8rem"} paddingLeft="0"/></Link>
                        </div>
                    ))}
                </div>
            </nav>
            <style jsx>{`
                .navbar{
                    display:none;
                }
                .listNav{
                    padding: 5% 0;
                }
                .listNav:hover{
                    transform: scale(1.02);
                }
                @media (min-width: 768px) {
                    .navbar{
                        display:block;
                    }
                }
                @media (min-width: 1024px) {
                   .navbar{
                        display:block;
                    }
                }
        `}</style>
        </>
         
    )
}

export default Navbar;