import "./WidgetTwo.css"
import {Visibility} from '@material-ui/icons';
import {Cancel} from '@material-ui/icons';

export default function WidgetTwo() {
    return (
        <div className="widgetTwo">
            <span className="twoTitle">Pending Approvals</span>
                <table className="approvalTable">
                    <tr className="approvalTr">
                        <td className="approvalTd">Name</td>
                        <td className="approvalTd">Insurance Number</td>
                        <td className="approvalTd">Mobile Number</td>
                        <td className="approvalTd">Status</td>
                        <td className="approvalTd">Approve Action</td>
                        <td className="approvalTd">Reject Action</td>
                    </tr>
                    <tr className="approvalTr">
                        <td className="approvalTd">Khalid</td>
                        <td className="approvalTd">DAMAN-SIVER-98765431</td>
                        <td className="approvalTd">971523095661</td>
                        <td className="approvalTd">PRESCRIPTION_READY</td>
                        <td className="approvalTd">
                        <button className="approveButton">
                            <Visibility className="visibilityIcon"/>
                            Approve
                        </button>
                        </td>
                        <td className="approvalTd">
                        <button className="rejectButton"> 
                            <Cancel className="visibilityIcon"/>
                            Reject
                        </button>
                        </td>
                    </tr>
            </table>
        </div>
    )  
}
