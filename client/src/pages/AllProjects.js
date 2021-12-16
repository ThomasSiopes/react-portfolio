import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_PROJECT_ALL } from "../utils/queries";

import { Container } from "react-bootstrap";
import FilteredProject from "../components/FilteredList";

function AllProjects() {
    const [filter, setFilter] = useState({
        tags: [],
    })

    const {loading, data} = useQuery(QUERY_PROJECT_ALL);

    if(loading) return <p>Loading...</p>

    const allProjects = data.projects;

    const addTags = (event) => {
        event.preventDefault();
        event.target.classList.remove("btn-success-inverse");
        event.target.classList.add("btn-success-inverse-activated");
        console.log("Activated");
        const newTag = event.target.title;
        let tagsCopy = [...filter.tags]

        if(!(filter.tags.includes(newTag))) tagsCopy.push(newTag);
        
        event.target.activeattribute = "true";
        console.log(tagsCopy);
        
        setFilter({...filter, tags: tagsCopy});
    }

    const removeTags = (event) => {
        event.target.classList.remove("btn-success-inverse-activated");
        event.target.classList.add("btn-success-inverse");
        console.log("Deactivated");
        let copyTags = [...filter.tags]
        
        for(let i = 0; i < copyTags.length; ++i) {
            if(copyTags[i] === event.target.title) copyTags.splice(i, 1);
        }
        console.log(copyTags);

        event.target.activeattribute = "false";
        setFilter({...filter, tags: copyTags});
    }

    const clearTags = () => {
        setFilter({...filter, tags: []});
        let checks = document.getElementsByClassName("tag-button");
        for(let newIndex of checks) {
            console.log(newIndex);
            newIndex.activeattribute = "false";
            newIndex.classList.remove("btn-success-inverse-activated");
            newIndex.classList.add("btn-success-inverse");
        }
    }

    const updateTags = (event) => {
        console.log(event.target.activeattribute);
        if(event.target.activeattribute == "false" || event.target.activeattribute == undefined) addTags(event);
        else removeTags(event);
    }

    return(
        <Container className="mt-nav mx-auto">
            <div className="genText font-questrial text-center mb-3">
                <h1>My Projects</h1>
                <p>These are all my projects. More sample text has to go here.</p>
            </div>
            <div>
                <ul id="filters" className="font-questrial text-center px-1">
                    <li className="btn btn-success-inverse rounded-pill m-1" onClick={clearTags}>
                        Show All
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="Front-End" activeattribute="false">Front-End</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="Back-End" activeattribute="false">Back-End</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="HTML" activeattribute="false">HTML</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="CSS" activeattribute="false">CSS</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="Javascript" activeattribute="false">Javascript</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="React" activeattribute="false">React</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="JQuery" activeattribute="false">JQuery</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="Node.js" activeattribute="false">Node.js</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="MySQL" activeattribute="false">MySQL</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span className="tag-button btn btn-success-inverse rounded-pill" title="Mongoose" activeattribute="false">Mongoose</span>
                    </li>
                </ul>
            </div>
            <FilteredProject projectList={allProjects} chosenTags={filter.tags}/>
        </Container>
    );
}

export default AllProjects;