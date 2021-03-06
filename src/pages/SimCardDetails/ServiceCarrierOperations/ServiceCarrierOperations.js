import React, { useRef, useState, useEffect } from 'react';
import scOperationStyle from './ServiceCarrierOp.module.css';
import useToken from '../../../hooks/useToken';
import Swal from 'sweetalert2';


const ServiceCarrierOperations = (props) => {

    const _id = props.simId;


    const [zipCode1, setZipCode1] = useState('');
    const [zipCodeforActive1, setZipCodeforActive1] = useState('');
    const [zipCodeforMDN1, setZipCodeforMDN1] = useState('');

    const [zipCode2, setZipCode2] = useState('');
    const [zipCodeforActive2, setZipCodeforActive2] = useState('');
    const [zipCodeforMDN2, setZipCodeforMDN2] = useState('');

    const urlPre = process.env.REACT_APP_ROOT_URL;
    const url = `${urlPre}/simCard`;

    const { token } = useToken();

    const currentDatewithTime = new Date().toLocaleString();

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const changeZipCode1 = (e) => {
        setZipCode1(e.target.value);
    };

    const changeZipforActive1 = (e) => {
        setZipCodeforActive1(e.target.value);
    };

    const changeZipforMDN1 = (e) => {
        setZipCodeforMDN1(e.target.value);
    };

    const changeZipCode2 = (e) => {
        setZipCode2(e.target.value);
    };

    const changeZipforActive2 = (e) => {
        setZipCodeforActive2(e.target.value);
    };

    const changeZipforMDN2 = (e) => {
        setZipCodeforMDN2(e.target.value);
    };




    // getting sim info
    const [simInfo, setSimInfo] = useState({});

    //sc1 = service carrier 1

    //sweeet alert will be shown in the data section

    const getCoverageforSC1 = () => {
        const getCoverage2URL = url + "/operation/GetCoverage2";
        const getCoverage2Data = {
            "zipCode": zipCode1,
            "serviceCarrierId": simInfo.serviceCarrier.id
        }
        fetch(getCoverage2URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(getCoverage2Data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.IsActivationEligible === "True") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations',
                        text: `Coverage available in this area`,
                    });
                }
            });
    };

    console.log(simInfo);


    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ _id }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.status === "success") {
                    setSimInfo(data.data)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sorry',
                        text: `${data.message}`,
                    });
                    // history.goBack();
                }
            });
    }, []);

    console.log(simInfo);

    return (
        <section>
            {/* serviceCarrier 1  */}
            <div className={`${scOperationStyle.planContainer}`}>
                <span className='ms-2 my-2'>
                    {' '}
                    <span className='fw-bold'> Service Carrier: </span>{simInfo?.serviceCarrier?.name}
                </span>
                {/* for the zip code and coverage  */}
                <div className='row py-md-2'>
                    <div className=' col-12 col-lg-6'>
                        <div className='row'>
                            <div className='col-6 col-lg-4'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Zip Code'
                                    onChange={changeZipCode1}
                                />
                            </div>
                            <div className='col-6 col-lg-8'>
                                <button
                                    className='btn btn-outline-secondary'
                                    onClick={getCoverageforSC1}
                                >
                                    Get Coverage2
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* for select plan and zip code  */}
                <div className='row py-md-2'>
                    <div className='col-12 col-lg-2 py-sm-1 py-md-0'>
                        <select
                            // ref={simStatusRef}
                            type='text'
                            className='form-select'
                            id='simPlan'
                            placeholder='Sim Plan'
                        //   ref={simStatusRef}
                        //   onChange={simStatusChange}
                        >
                            <option hidden disabled selected value>
                                Select Plan
                            </option>
                            <option value='plan 1'>Plan 1</option>
                            <option value='plan 2'>Plan 2</option>
                            <option value='plan 3'>Plan 3</option>
                        </select>
                    </div>
                    <div className='col-12 col-lg-2 py-sm-1 py-md-0'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Zip Code'
                            onChange={changeZipforActive1}
                        />
                    </div>
                    <div className='col-6 col-lg-1 py-sm-1 py-md-0 me-1'>
                        <button className='btn btn-outline-secondary'>Activate</button>
                    </div>
                    <div className='col-6 col-lg-1 py-sm-1 py-md-0 me-1'>
                        <button className='btn btn-outline-secondary'>HotLine</button>
                    </div>
                    <div className='col-6 col-lg-1 py-sm-1 py-md-0'>
                        <button className='btn btn-outline-secondary'>UnHotline</button>
                    </div>
                </div>
                {/* for mdn/esn  */}
                <div className='row py-md-2'>
                    <div className='col-12 col-md-12 col-lg-4'>
                        <div className='row'>
                            <div className='col-6 col-lg-6'>
                                <select
                                    // ref={simStatusRef}
                                    type='text'
                                    className='form-select me-1'
                                    id='simPlan'
                                    placeholder='Sim Plan'
                                //   ref={simStatusRef}
                                //   onChange={simStatusChange}
                                >
                                    <option hidden disabled selected value>
                                        Select Plan
                                    </option>
                                    <option value='plan 1'>Plan 1</option>
                                    <option value='plan 2'>Plan 2</option>
                                    <option value='plan 3'>Plan 3</option>
                                </select>
                            </div>
                            <div className='col-6 col-lg-6'>
                                <button className='btn btn-outline-secondary'>
                                    Change Plan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-4'>
                        <div className='row'>
                            <div className='col-6 col-lg-6'>
                                <input
                                    type='text'
                                    className='form-control me-1'
                                    placeholder='Enter New ESN'
                                />
                            </div>
                            <div className='col-12 col-lg-6'>
                                <button className='btn btn-outline-secondary'>SWAP ESN</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-4'>
                        <div className='row'>
                            <div className='col-6 col-lg-6'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='ZIP Code'
                                    onChange={changeZipforMDN1}
                                />
                            </div>
                            <div className='col-6 col-lg-6'>
                                <button className='btn btn-outline-secondary'>SWAP MDN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${scOperationStyle.planContainer}`}>
                <div className='mb-2'>
                    <span className='fw-bold text-primary'>Sim Operations Log</span>
                </div>
                <div className='table-responsive'>
                    <table class='table table-bordered text-center'>
                        <thead class='thead-dark'>
                            <tr>
                                <th scope='col'>Date</th>
                                <th scope='col'>User Name</th>
                                <th scope='col'>Operation</th>
                                <th colSpan={2}>Result</th>
                            </tr>
                        </thead>
                        <tbody className='mb-5'>
                            <tr>
                                <td>{new Date().toLocaleDateString()}</td>
                                <td>Name</td>
                                <td>Active "Plan One"</td>
                                <td colSpan={2}>
                                    UserNote Lorem, ipsum dolor sit amet consectetur.
                                </td>
                            </tr>
                            <tr>
                                <td>{new Date().toLocaleDateString()}</td>
                                <td>Name</td>
                                <td>Active "Plan One"</td>
                                <td colSpan={2}>
                                    UserNote Lorem, ipsum dolor sit amet consectetur.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ServiceCarrierOperations;