import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
// import Form from "./Form";

const endPoint = "api/lead"

const App = () => (

<React.Fragment>
    <DataProvider
        endpoint={endPoint}
        render={
            data => <Table data={data}/>
        }
    />
</React.Fragment>

);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;