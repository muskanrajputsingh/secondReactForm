import './App.scss';
import React, {useState} from 'react';
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import firebaseDb from './firebase';


function App() {
  const [state,setState]= useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });
  const {name,email,phone,message}=state;
  
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(!name || !email || !phone || !message){
    toast.error("please provide value in each input field!")
  }else{
    firebaseDb.child("contacts").push(state);
    setState({name:"",email:"",phone:"",message:""});
    toast.success("form submitted successfully!!")
  }
  };

  const handleInputChange=(e)=>{
  let {name,value}=e.target;
  setState({...state,[name]:value});
  };

  return (
    <section className='contact-section'>
      <div className='container'>
        <ToastContainer position='top-center'></ToastContainer>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='wrapper'>
              <div className='row no-gutters'>
                <div className='col-md-6'>
                  <div className='contact-wrap w-100 p-lg-5 p-4'>
                    <h3 className='mb-4'>Send us a Message</h3>
                    <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className='form-group'>
                            <input
                             type='text'
                             className='form-control'
                             name='name'
                             placeholder='Name'
                             onChange={handleInputChange}
                             value={name}
                             />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className='form-group'>
                            <input
                             type='email'
                             className='form-control'
                             name='email'
                             placeholder='Email'
                             onChange={handleInputChange}
                             value={email}
                             />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className='form-group'>
                            <input
                             type='number'
                             className='form-control'
                             name='phone'
                             placeholder='Phone No'
                             onChange={handleInputChange}
                             value={phone}
                             />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className='form-group'>
                            <textarea
                             type='text'
                             className='form-control'
                             name='message'
                             placeholder='Message'
                             value={message}
                             onChange={handleInputChange}>
                              
                            </textarea>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <input type='submit' value="send message" className='btn btn-primary' />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='col-md-6 d-flex align-items-stretch'>
                  <div className='info-wrap w-100 p-lg-5 p-4 img'>
                  <h3 className='text-cente text-success fb-400'>contact us</h3>
                     <div className='mb-4 text-cente text-danger'>we are available for your any query!!! </div>
                    <div className='dbox w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify content center'>
                         <span className='fa-solid fa-location-dot'></span>
                      </div>
                      <div className='text pl-3'>
                        <p>
                          <span>address :  </span>
                          <a href='#'>204 sita nagar gogaon raipur chhattisgarh</a>
                        </p>
                      </div>
                    </div>
                    <div className='dbox w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify content center'>
                         <span className='fa-solid fa-phone'></span>
                      </div>
                      <div className='text pl-3'>
                        <p>
                          <span>phone :  </span>
                          <a href='#'>9770626211</a>
                        </p>
                      </div>
                    </div>
                    <div className='dbox w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify content center'>
                         <span className='fa-solid fa-paper-plane'></span>
                      </div>
                      <div className='text pl-3'>
                        <p>
                          <span>Email :  </span>
                          <a href='#'>muskansingh7105@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
