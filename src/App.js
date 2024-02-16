import React from 'react';
import {Posts} from "./components/PostContainer/Posts/Posts";
import {Launches} from "./components/LaunchContainer/Launches/Launches";

const App = () => {
    return (
        <div>
            <div>
                <b>Task # 1</b>
            </div>
            <br/>
            <Posts/>

            <hr/>
            <div><b>Task # 2</b></div>
            <br/>
            <Launches/>
        </div>
    );
};

export default App;