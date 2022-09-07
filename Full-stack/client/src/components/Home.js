import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import axios from "axios"
import moment from "moment"
import Alert from 'react-bootstrap/Alert';
import styles from '../styles/Home.module.css'

const Home = () => {

    const [data, setData] = useState([]);
    // console.log(data)

    const [show, setShow] = useState(false);

    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            setData(res.data.getUser)
        }

    }

    const dltUser = async (id) => {
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            console.log("user delete");
            setShow(true)
        }
    }

    useEffect(() => {
        getUserData()
    }, [dltUser])
    return (
        <>
            {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    User Delete
                </Alert> : ""
            }
            <div>
                <h1 className={styles.h1}>Here Is All Student Data</h1>
                <div >
                    <button  className={styles.add_user_btn}><NavLink to="/register" className={styles.navlink}>Add Student</NavLink></button>
                </div>

                <div className={styles.mapping_main_div}>

                    {
                        data.length > 0 ? data.map((elem, i) => {
                            return (
                                <>
                                <div className={styles.borders_box_div} >
                                    
                                        <div className={styles.mapping_chid_div}>
                                            <div>
                                                <img src={`/uploads/${elem.imgpath}`} />
                                            </div>
                                            <div>
                                                <h3><b>Student Name : </b>{elem.fname}</h3>
                                                <p><b>D.O.B : </b>{moment(elem.dob).format("L")}</p>
                                                <p><b>Higher Education : </b>{elem.education}</p>                                             
                                                <p><b>Summary : </b>{elem.desc}</p>
                                            </div>
                                        </div>
                                        <div className={styles.button_div}> 
                                            <div className={styles.mapping_chid_div}>
                                                <div className={styles.address_div}>
                                                    <p><b>Hobbies : </b>{elem.hobbies}</p>  
                                                    <p><b>Address : </b>{elem.address}</p> 
                                                </div> 
                                                <div>
                                                    <p><b>Father's Name : </b>{elem.father}</p>
                                                    <p><b>Mother's Name : </b>{elem.mother}</p>
                                                    <p><b>Student Code : </b>{elem.stdcode}</p>                                  
                                                    <p><b>Phone No : </b>{elem.number}</p>                                        
                                                    <p>
                                                        <b>Date Added : </b>{moment(elem.date).format("L")}
                                                    </p>
                                                
                                                </div>     
                                            </div>                                         
                                                                                 
                                            <button onClick={() => dltUser(elem._id)}>
                                                Delete
                                            </button>
                                        </div>
                                    
                                </div>
                                </>
                            )
                        }) : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Home




