import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "./greetings";
import Affiliate from "./affiliate";
import Footer from "../partials/footer";
import Charts from "./charts";
import Transaction from "./transaction";

const Home = () => {
    return ( <>
        <Header/>
        <Nav/>
        <Greetings/>
        <Affiliate/>
        <Charts/>
        <Transaction/>
        <Footer/>
    </> );
}
 
export default Home;