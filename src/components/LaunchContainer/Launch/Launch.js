import React from 'react';


const Launch = ({launch}) => {
    const {launch_year,mission_name} =launch;
    const inValidYear = '2020';
    let mission_patch_small = launch.links.mission_patch_small
    if (launch_year !== inValidYear ){

    return (
        <div>
            <div>launch_year: {launch_year}</div>
            <div>mission_name: {mission_name}</div>
            <div>mission_patch_small: {mission_patch_small}</div>
            Launch
        </div>
    );
    }
};

export {Launch};