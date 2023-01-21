import {MichaelRynkiewicz} from "../../assets/img/about";

function About() {
    return (<div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>About</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-3 col-sm-12 text-center">
                    <img src={MichaelRynkiewicz} className="img-fluid" alt="profile" style={{maxHeight: 300 + "px"}}/>
                </div>
                <div className="col-md-9 col-sm-12">
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="row" style={{width: 40 + "%"}}>Name</th>
                            <td>Michael Rynkiewicz</td>
                        </tr>
                        <tr>
                            <th scope="row">GitHub</th>
                            <td><a href="https://github.com/meik99">https://github.com/meik99</a></td>
                        </tr>
                        <tr>
                            <th scope="row">E-Mail</th>
                            <td><a href="mailto:michaelrynkiewicz3@gmail.com">michaelrynkiewicz3@gmail.com</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Languages</th>
                            <td>German (Native), English (Fluent)</td>
                        </tr>
                        <tr>
                            <th scope="row">Top three most used technologies</th>
                            <td>Angular, NodeJS, Google Cloud Functions</td>
                        </tr>
                        <tr>
                            <th scope="row">Top three favourite languages</th>
                            <td>Golang, Typescript, Kotlin</td>
                        </tr>
                        <tr>
                            <th scope="row">Top three interests</th>
                            <td>Cloud Computing, Software Architecture, AI</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
}

export default About;