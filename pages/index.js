import MainContainer from "../components/MainContainer/MainContainer";
import ItemsContainer from "../components/ItemsContainer/ItemsContainer";
import CentralBody from "../components/CentralBody/CentralBody";
import backendAddr from "../config/config"
import axios from "axios";

const Index = ({views}) => {
    return (
        <>
            <MainContainer>
                    <CentralBody>
                    <ItemsContainer>{views}</ItemsContainer>
                    </CentralBody>
            </MainContainer>
        </>
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