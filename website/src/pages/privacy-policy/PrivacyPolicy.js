import { useParams } from "react-router-dom";
import "./PrivacyPolicy.scss"
import { privacyPolicyHtml } from "./data";

const PrivacyPolicy = () => {
    const { app } = useParams()

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-justify" dangerouslySetInnerHTML={{__html: privacyPolicyHtml(app)}}>
                </div >
            </div >
        </div >
    );
}

export default PrivacyPolicy;