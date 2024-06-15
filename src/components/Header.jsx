import img from "../assets/codepen-logo-gifc2.gif";
import VariantButtonGroup from "./VariantButtonGroup";

function Home() {
    return(
        <>
        <div className="bg-black h-14 flex">
            <div className="h-14 w-20">
                <img src={img} alt="Name_Logo"/>
            </div>
            <div className="text-white my-4 text-xl">
                CodePen
            </div>

            <VariantButtonGroup />
        </div>
        </>
    )
}

export default Home;