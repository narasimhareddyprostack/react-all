import React from 'react';

const ETracker = ({ track }) => {
    return <>{(Object.keys(track).length > 0) ?
        <div className='container'>
            <div className='row'>
                <div className='col m-auto'>
                    <div className='gutter-gap'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>DATE</td>
                                    <td>REASON</td>
                                    <td>TOTAL AMOUNT</td>
                                    <td>ADDED AMOUNT</td>
                                    <td>REMOVED AMOUNT</td>
                                    <td>BALANCE</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    track.map((elem, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{elem.tDate}</td>
                                            <td>{elem.tReason}</td>
                                            <td>{elem.tTotal}</td>
                                            <td>{elem.tAddedAmount}</td>
                                            <td>{elem.tRemovedAmount}</td>
                                            <td>{elem.tBalanceAmount}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        : null}</>
}

export default ETracker;
