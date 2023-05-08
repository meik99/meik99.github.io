import "./PrivacyPolicy.scss"
import { privacyPolicyHtml } from "./data";

const PrivacyPolicy = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const app = queryParameters.get("app")

    console.log(app)

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