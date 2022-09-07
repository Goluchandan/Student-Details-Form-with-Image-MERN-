import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styles from '../styles/Register.module.css'

const Register = () => {

  const [fname, setFName] = useState("");
  const [father, setFather] = useState("")
  const [mother, setMother] = useState("")
  const [stdcode, setStdcode] = useState("")
  const [dob, setDob] = useState("")
  const [number, setNumber] = useState("")
  const [education, setEducation] = useState("")
  const [desc, setDesc] = useState("")
  const [address, setAddress] =useState("")
  const [hobbies , setHobbies] = useState("")


  const [file, setFile] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setFName(value);
  }
  const fatherdata = (e) => {
    const { value } = e.target;
    setFather(value)
  }
  const motherdata = (e) => {
    const { value } = e.target;
    setMother(value)
  }
  const stdcodedata = (e) => {
    const { value } = e.target;
    setStdcode(value)
  }
  const dobdata = (e) => {
    const { value } = e.target;
    setDob(value)
  }
  const numberdata = (e) => {
    const { value } = e.target;
    setNumber(value)
  }
  const educationdata = (e) => {
    const { value } = e.target;
    setEducation(value)
  }
  const hobbiesdata = (e) => {
    const { value } = e.target;
    setHobbies(value)
  }
  const descdata = (e) => {
    const { value } = e.target;
    setDesc(value)
  }
  const addressdata = (e) => {
    const { value } = e.target;
    setAddress(value)
  }
  

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);
    formData.append("father",father)
    formData.append("mother",mother);
    formData.append("stdcode",stdcode);
    formData.append("dob",dob);
    formData.append("number",number);
    formData.append("education",education);
    formData.append("hobbies",hobbies);
    formData.append("desc",desc);
    formData.append("address",address)


    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("/register", formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("errror")
    } else {
      history("/")
    }
  }

  return (
    <>
      <div className={styles.Register_page_main_div}>
        <h1>Fill Your Details</h1>

        <form className={styles.register_form_div}>
          <div className={styles.register_form_child_div}>
            <label>Student Name</label>
            <input type="text" name='fname' onChange={setdata} placeholder="Enter Your Student Name" />
            <label>Father's Name</label>
            <input type="text" name='father' onChange={fatherdata} placeholder="Enter Your Father's Name" />
            <label>Mother's Name</label>
            <input type="text" name='mother' onChange={motherdata} placeholder="Enter Your Mother's Name" />
            <label>Student Code</label>
            <input type="text" name='stdcode' onChange={stdcodedata} placeholder="Enter Your Student Code" />
            <label>D.O.B</label>
            <input type="date" name='dob' onChange={dobdata} placeholder="Enter Your D.O.B" />
            <label>Phone No</label>
            <input type="number" name='number' onChange={numberdata} placeholder="Enter Your Phone No" />
            <label>Higher Education</label>
            <input type="text" name='education' onChange={educationdata} placeholder="Enter Your Higher Education" />
            <label>Your Hobbies</label>
            <input type="text" name='hobbies' onChange={hobbiesdata} placeholder="Enter Your Hobbies" />
            <label>Your Summary</label>
            <textarea rows="4" cols="50" type="text" name='desc' onChange={descdata} placeholder="Enter Your Summary" />            
            <label>Address</label>
            <textarea type="text" name='address' onChange={addressdata} placeholder="Enter Your Address" />
          </div>

          <div className={styles.register_form_child_img}>
            <label>Student Image</label>
            <input type="file" onChange={setimgfile} name='photo' placeholder="Student Photo" />
          </div>
          <button className={styles.register_form_button} variant="primary" type="submit" onClick={addUserData}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Register