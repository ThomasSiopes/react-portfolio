import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_PROJECT_ALL } from "../utils/queries";

function Home () {
    let {loading, data} = useQuery(QUERY_PROJECT_ALL);

    if(loading) return <p>Loading</p>

    console.log(data);
    console.log(data.projects)

    return(
        <div>Hello</div>
    )
}

export default Home;