import React, { useState } from "react";
import Axios from "axios";
import { BASEURL } from "../Constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "../Includes/Navigation/Navigation";
import LeftPanel from "../Includes/LeftPanel/LeftPanel";
import TopFooter from "../Includes/Footer/TopFooter";
import BottomFooter from "../Includes/Footer/BottomFooter";

const Contact = () => {

  const [input, setInput] = useState({})
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInput({ ...input, [name]: value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Axios.post(`${BASEURL}api/enquiry`, { name: input.name, email: input.email, phone: input.number, message: input.message })
        .then(data => {
          if (data.data.errorcode === 0) {
            toast(`${data.data.msg}`, {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
            setInput({})
          }
          else {
            toast(`${data.data.msg}`, {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
          }
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <ToastContainer />
      <div className='TermNavigation'>
        <Navigation />
      </div>
      <div className="container-fluid p-0">
        <div className="container">
          <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <LeftPanel />
          </div>
            <div className="col-xl-6 col-lg-6 col-md-9 col-sm-12 col-12">
              
            <div className="title">
                <h2>How can we help you?</h2>
              </div>
              <div className="contactForm">
                <form onSubmit={handleSubmit}>
                  <div className="inputGroup">
                    <input
                      type="name"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      value={input.name || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputGroup">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={input.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputGroup">
                    <input
                      type="number"
                      name="number"
                      id="number"
                      className="form-control"
                      placeholder="Number"
                      value={input.number || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputGroup">
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      ccols="5"
                      className="form-control"
                      placeholder="Describe your problem..."
                      value={input.message || ""}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="inputGroup">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopFooter />
      <BottomFooter />
    </>
  );
};

export default Contact;
