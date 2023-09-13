import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const ContactUs = () => {
  const [formData,setFormData]=useState({firstname:"",address:"",state:"",secondName:"",phoneNumber:"",pincode:"",gender:"",address:"",date:""})

  const [startDate, setStartDate] = useState(new Date());
  const onSubmitData=(e)=>{
    setFormData({...formData,
      [e.target.name]:e.target.value})
    console.log("formData",formData);
  }
  return (
    <div>
      <div>
        <h1>Submit Your Details</h1>
        <div>
          <input
            className="border-2 border-cyan-500 m-2"
            placeholder="firstName"
            name="firstName"
            value={formData.firstname}
            onChange={(e)=>setFormData(e.target.value)}
          />
          <input
            className="border-2 border-cyan-500 m-2"
            placeholder="secondName"
            name="secondName"
            value={formData.secondName}
            onChange={(e)=>setFormData(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-2 border-cyan-500 m-2"
            placeholder="PhoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e)=>setFormData(e.target.value)}
          />
          <input
            className="border-2 border-cyan-500 m-2"
            placeholder="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={(e)=>setFormData(e.target.value)}
          />
        </div>
        <h1>Gender</h1>
        <div className="flex">
          <div className="flex">
            <h1>Male</h1>
            <input type="radio" name="gender" value="male" onChange={(e)=>setFormData(e.target.value)} />
          </div>
          <div className="flex mx-4">
            <h1>Female</h1>
            <input type="radio" name="gender" value="female" onChange={(e)=>setFormData(e.target.value)} />
          </div>
        </div>
        <div>
          <h1>Select your DOB</h1>
          <DatePicker
          name="date"
            selected={startDate}
           value={formData.date}
            onChange={(date) => setFormData(date)}
          />
        </div>
        <div>
          <h1>Select your State</h1>
          <select name="state" value={formData.state} onChange={(e)=>setFormData(e.target.value)}>
            <option value="Kerala">kerala</option>
            <option value="TamilNaadu">TamilNaadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Goa">Goa</option>
            <option value="Hydrabad">Hydrabad</option>
          </select>
        </div>
        <div>
          <h1>Address</h1>
          <textarea name="address" value={formData.address} onChange={(e)=>setFormData(e.target.value)} className="border-2 border-cyan-500 m-2"/>
        </div>
        <div>
          <button onClick={onSubmitData} className="bg-blue-800 text-white rounded-sm m-3">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
