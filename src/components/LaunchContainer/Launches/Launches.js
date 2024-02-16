import React, {useEffect, useState} from 'react';
import {launchService} from "../../../services/launchService";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        launchService.getAll().then(value => value.data).then(value => setLaunches(value))
    }, []);
    return (
        <div>
            Launches
            <div>
                {launches.map(launch => <Launch key={launch.id} launch={launch} />)}
            </div>
        </div>
    );
};

export {Launches};