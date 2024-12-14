import backendAddr from "../config/config"
import axios from "axios";
import LayOut from "../components/LayOut/LayOut";

const Index = ({views}) => {

    return (
        <LayOut>{views}</LayOut>
    );
};

export default Index;

export async function getStaticProps(){
    try {
        const response = await axios.get(`${backendAddr}/views/get_all`)
        const views = await response.data
        return {props: {views}, revalidate: 10}
    }
    catch (error){
        console.log(error)
        return {
            props: {}
        }
    }
}