import NavBar from "../Components/NavBar";
import SideNav from "../Components/SideNav";


export default function RootLayout({ children }) {
    return (
        <div>
            <NavBar/>
            <SideNav />
            
        </div>
    );
}