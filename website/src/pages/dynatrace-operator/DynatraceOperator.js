import {NavLink} from "react-router-dom";

function DynatraceOperator() {
    return (
        <div className="container w-700 text-justify">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Dynatrace Operator</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <h1>Dynatrace Operator</h1>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>
                        The Dynatrace Operator (DTO) can be used to automatically deploy and manage OneAgent (OA) and
                        ActiveGate (AG) instances on a Kubernetes cluster.
                    </p>
                    <p>
                        For the longest time, OneAgent and ActiveGate instances were only able to be started directly on
                        physical machines.
                        As Cloud Computing and Infrastructure As A Service (IAAS) have emerged, this way of running
                        these programms that way is not sufficient enough.
                        First, Docker images of these applications have been created, however, they need a lot of custom
                        configuration to work in a clusterized environment.
                        In order to ease configuration requirements for customers and automate parts of it, the
                        Dynatrace Operator has been created.
                    </p>
                    <p>
                        Source: <a
                        href="https://github.com/Dynatrace/dynatrace-operator">https://github.com/Dynatrace/dynatrace-operator</a>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <hr/>
                    <h2 id="technology">Technologies Used</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h3>Kubernetes and GKE</h3>
                    <p>
                        Kubernetes is a software system, that is used to combine servers to a cluster and manage the state of them and resources on them.
                        Servers that are connected this way are commonly called nodes.
                        Several kinds of workloads can be scheduled on a Kubernetes cluster by specifying the state the cluster should have.
                        Kubernetes then deploys these workloads according to their resource requirements on connected nodes.
                        The target state of a cluster can be defined using various kinds of configuration files.
                        Most notably and important for this project are
                        <a href="https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"> Deployments</a>,
                        <a href="https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"> StatefulSets</a>,
                        <a href="https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"> DaemonSets</a>, and
                        <a href="https://kubernetes.io/docs/concepts/workloads/pods/"> Pods</a>.
                    </p>
                    <p>
                        The Google Kubernetes Engine (GKE) is a IaaS provider that can be used to instantiate a Kubernetes cluster on Google infrastructure.
                        Different providers exist, such as Amazon Web Service (AWS), Microsoft Azure, or Oracle Cloud Infrastructure (OCI).
                        This project was mainly developed using GKE.
                    </p>
                </div>

                <div className="col-12">
                    <h3>Operator SDK</h3>
                    <p>
                        The <a href="https://sdk.operatorframework.io/">Operator SDK</a> can be used to write an operator for a Kubernetes cluster.
                        Operators are software systems that use the Kubernetes API to communicate with the cluster and, for example, schedule workloads automatically.
                        Since Kubernetes provides this API via HTTP calls, a SDK is not strictly needed, but it makes development easier by wrapping such calls in easier to use methods.
                        The specific SDK used in this project allows building an operator in Golang, Ansible, or Helm.
                        Golang is used to develop the DTO, since it offers the most flexibility.
                    </p>
                </div>

                <div className="col-12">
                    <h3>Golang</h3>
                    <p>
                        The <a href="https://go.dev/">Go programming language</a>, also known as Golang, is a programming language developed by Google.
                        It is mostly inspired by C and is similarly procedural, but also includes features for object-oriented, like types that can have methods, or functional programming, like functions as first class citizens.
                        Furthermore, the syntax is easier to read and the tooling is more refined than the one of a typical C program.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <hr/>
                    <h2 id="deploying-osagent">Deploying OSAgent Instances</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p>

                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <hr/>
                    <h2 id="deploying-osagent">Deploying Special Agent Instances</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <hr/>
                    <h2 id="deploying-osagent">Deploying ActiveGate Instances</h2>
                    <hr/>
                </div>
            </div>

        </div>
    );
}

export default DynatraceOperator;