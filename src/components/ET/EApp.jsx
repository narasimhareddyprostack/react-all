import React, { useState } from 'react';
import EForm from './EForm'
import ETracker from './ETracker'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
const EApp = () => {
    const [track, settrack] = useState([]);
    return <>
        <EForm track={track} settrack={settrack} />
        <ETracker track={track} />
    </>;
}

export default EApp
