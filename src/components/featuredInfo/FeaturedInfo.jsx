import "./featuredInfo.css"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalNurseIcon from '@material-ui/icons/AddCircle';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
export default function FeaturedInfo() {
    return (
        <div className="featureInfo">
            <div className="featuredItem">
            <LocalNurseIcon className="featuredIcon"/> 
            <div className="featuredContainer">
            <span className="featuredNumber">150</span>
                <span className="featuredTitle">Nurses</span>
            </div>
            </div>
            <div className="featuredItem">
            <LocalHospitalIcon className="featuredIcon"/>
            <div className="featuredContainer">
            <span className="featuredNumber">224</span>
                <span className="featuredTitle"> Patients</span>
            </div>
            </div>
            <div className="featuredItem">
            <LocalPharmacyIcon className="featuredIcon"/>
            <div className="featuredContainer">
                <span className="featuredNumber">600</span>
                <span className="featuredTitle"> Pharmacusts</span>
            </div>
            </div>
        </div>
    )
}

