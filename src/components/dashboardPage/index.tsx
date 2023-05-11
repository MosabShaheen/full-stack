import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Notes from "@/sections/notes";

export default function DashboardPage(){
    return(
        <div>
            <div className="dark:bg-black">
            <Header />
            <Notes />
            </div>
            <Footer />
        </div>
    )
}