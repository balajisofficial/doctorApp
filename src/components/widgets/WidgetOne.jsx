import "./widgetOne.css"
import {Visibility} from '@material-ui/icons';
import {Cancel} from '@material-ui/icons';

export default function widgetOne() {
    return (
        <div className="widgetOne">
            <span className="oneTitle">Patient Bookings</span>
            <ul className="patientList">
                <li className="patientItem">
                    <div className="userDetails">
                        <span className="name">MageshS</span>
                        <span className="eid">EI39339339399</span>
                        <span className="mobileNumber">971532282871</span>
                    </div>
                    <button className="approveButton">
                        <Visibility className="visibilityIcon"/>
                        Add Prescription
                    </button>
                </li>
                <li className="patientItem">
                    <div className="userDetails">
                        <span className="name">Kumar</span>
                        <span className="eid">EI47277273399</span>
                        <span className="mobileNumber">97152292919</span>
                    </div>
                    <button className="approveButton">
                        <Visibility className="visibilityIcon"/>
                        Add Prescription
                    </button>
                </li>
                <li className="patientItem">
                    <div className="userDetails">
                        <span className="name">Vanni</span>
                        <span className="eid">EI38383882828</span>
                        <span className="mobileNumber">97129191193</span>
                    </div>
                    <button className="approveButton">
                        <Visibility className="visibilityIcon"/>
                        Add Prescription
                    </button>
                </li>
                <li className="patientItem">
                    <div className="userDetails">
                        <span className="name">Tamil</span>
                        <span className="eid">EI3384855885</span>
                        <span className="mobileNumber">97129333344</span>
                    </div>
                    <button className="approveButton">
                        <Visibility className="visibilityIcon"/>
                        Add Prescription
                    </button>
                </li>
                <li className="patientItem">
                    <div className="userDetails">
                        <span className="name">Balaji</span>
                        <span className="eid">EI39339339399</span>
                        <span className="mobileNumber">971  </span>
                    </div>
                    <button className="approveButton">
                        <Visibility className="visibilityIcon"/>
                        Add Prescription
                    </button>
                </li>
            </ul>
        </div>
    )
}
