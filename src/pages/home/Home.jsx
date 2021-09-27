import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Charts from "../../components/charts/Charts"
import {userData} from "../../dummyData"
import WidgetOne from "../../components/widgets/WidgetOne"
import WidgetTwo from "../../components/widgets/WidgetTwo"
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <div className="homeWidgets">
                <WidgetOne/>
                <WidgetTwo/>
            </div>
            <Charts data={userData} title="Month Wise Stats Patients Visited"  grid dataKey="Patients"/>
        </div>
    )
}
