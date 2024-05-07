import React, { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";

const MyAccount = () => {
  const [key, setKey] = useState("myDetails");

  return (
    <>
      <section className="py-100">
        <div className="container">
          <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row className="mx-0">
              <Col sm={3}>
                <Nav variant="pills" className="tab-button-box d-block">
                  <Nav.Item>
                    <Nav.Link eventKey="myDetails">
                      {" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 0C6.265 0 0 6.265 0 14C0 21.735 6.265 28 14 28C21.735 28 28 21.735 28 14C28 6.265 21.735 0 14 0ZM14 4.2C16.317 4.2 18.2 6.083 18.2 8.4C18.2 10.724 16.317 12.6 14 12.6C11.683 12.6 9.8 10.724 9.8 8.4C9.8 6.083 11.683 4.2 14 4.2ZM14 24.08C10.493 24.08 7.413 22.288 5.6 19.572C5.635 16.793 11.207 15.26 14 15.26C16.793 15.26 22.358 16.793 22.4 19.572C20.587 22.288 17.507 24.08 14 24.08Z"
                          fill="black"
                        />
                      </svg>{" "}
                      My Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="previousOrder">
                      {" "}
                      <svg
                        width="28"
                        height="36"
                        viewBox="0 0 28 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.13832 6.99368C7.21436 4.71204 8.0269 2.87074 9.7533 1.48929C11.0019 0.490247 12.4377 -0.0132828 14.0361 0.000266321C15.9206 0.016304 17.5399 0.705788 18.8669 2.04121C20.195 3.37759 20.8087 5.02851 20.8615 6.97377C21.7364 6.97377 22.5603 6.97253 23.3841 6.97405C25.4729 6.97778 26.3058 7.74704 26.4714 9.83125C26.9784 16.2132 27.5097 22.5933 27.9795 28.9779C28.2556 32.7302 25.7182 35.3853 21.9494 35.3886C16.6506 35.3933 11.3518 35.3933 6.05301 35.3886C2.28332 35.3853 -0.256314 32.7244 0.0206134 28.9778C0.504372 22.4325 1.04039 15.891 1.5612 9.34846C1.66752 8.01401 2.58541 7.07871 3.9287 7.00516C4.97959 6.94778 6.03601 6.99368 7.13832 6.99368ZM18.7095 6.92538C18.8323 4.21846 16.5778 2.00429 13.8465 2.07453C11.257 2.14103 9.06008 4.46995 9.32139 6.92538C12.431 6.92538 15.5462 6.92538 18.7095 6.92538ZM12.5906 22.27C11.9394 21.5999 11.4089 21.0246 10.8457 20.4835C10.3745 20.0308 9.77072 20.0223 9.36121 20.4126C8.93178 20.8218 8.89902 21.4134 9.35222 21.8897C10.1612 22.74 10.995 23.5677 11.8412 24.3811C12.2839 24.8066 12.8255 24.8504 13.2678 24.4165C15.0912 22.6269 16.8977 20.8194 18.6876 18.9961C19.1167 18.559 19.0602 17.9686 18.6531 17.5728C18.2507 17.1814 17.6728 17.1543 17.2269 17.5765C16.425 18.3362 15.6512 19.1258 14.8754 19.9125C14.1342 20.6642 13.4053 21.4282 12.5906 22.27ZM7.19183 7.01691C7.19183 8.63451 7.16653 10.1907 7.20538 11.7453C7.2192 12.3005 7.6236 12.6008 8.18119 12.6116C8.70394 12.6217 9.14788 12.3615 9.16461 11.8439C9.21618 10.2482 9.18341 8.64999 9.18341 7.01691C8.5137 7.01691 7.90164 7.01691 7.19183 7.01691ZM18.8099 7.02341C18.8099 8.64239 18.7788 10.2198 18.8266 11.7946C18.8435 12.35 19.2865 12.6244 19.8406 12.611C20.3646 12.5983 20.773 12.3178 20.787 11.7949C20.8289 10.2195 20.8021 8.64225 20.8021 7.02355C20.121 7.02341 19.4928 7.02341 18.8099 7.02341Z"
                          fill="black"
                        />
                        <path
                          d="M18.7102 6.92524C15.5469 6.92524 12.4317 6.92524 9.32193 6.92524C9.06063 4.46981 11.2575 2.14088 13.8471 2.07438C16.5785 2.00415 18.833 4.21832 18.7102 6.92524Z"
                          fill="white"
                        />
                      </svg>
                      Previous Order
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="subscription">
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.00513225 12.1924C0.00530894 10.1587 -0.00856076 8.12489 0.00857759 6.09138C0.0336667 3.1149 1.95502 0.74591 4.84089 0.13536C5.31122 0.0359117 5.80479 0.00889233 6.28775 0.00775926C10.3072 -0.00191541 14.3267 -0.000869497 18.3462 0.00322698C22.0352 0.00697483 24.6527 2.59743 24.6568 6.24208C24.659 8.18861 24.6615 10.1351 24.6523 12.0816C24.6511 12.3483 24.7154 12.5296 24.9398 12.7069C28.5567 15.5638 29.0344 20.7123 26.0144 24.1793C23.2418 27.3623 18.5147 27.9292 15.0468 25.4835C14.6896 25.2316 14.356 24.9359 14.0565 24.6192C13.8216 24.3708 13.5737 24.3016 13.2436 24.3033C10.9026 24.3149 8.56159 24.3127 6.22061 24.3086C3.21698 24.3034 0.908341 22.5427 0.182788 19.6704C0.052837 19.1562 0.0178535 18.6085 0.0126413 18.0755C-0.00670558 16.1146 0.00495557 14.1534 0.00513225 12.1924ZM22.5475 11.3616C22.5475 9.61017 22.5485 7.92652 22.5462 6.24295C22.5459 6.0254 22.5396 5.80672 22.5157 5.59074C22.4937 5.39001 22.4645 5.18606 22.4042 4.99405C21.8152 3.11934 20.3703 2.07422 18.3456 2.07143C14.3706 2.06602 10.3954 2.09174 6.42062 2.06167C3.98936 2.04328 2.10485 3.58573 2.06968 6.25577C2.01694 10.264 2.0355 14.2736 2.06465 18.2823C2.08037 20.4523 3.62601 22.107 5.81088 22.2072C7.9113 22.3036 10.0192 22.2402 12.1239 22.2442C12.1594 22.2442 12.195 22.2089 12.2576 22.1757C11.6089 20.6206 11.4217 19.0181 11.7689 17.3368C9.62452 17.3368 7.52198 17.3368 5.39355 17.3368C5.39355 16.6336 5.39355 15.9597 5.39355 15.255C5.5842 15.255 5.74454 15.255 5.90488 15.255C7.98074 15.255 10.0565 15.257 12.1324 15.2508C12.2814 15.2503 12.499 15.24 12.568 15.1485C13.035 14.5293 13.4705 13.8869 13.9435 13.2132C11.0898 13.2132 8.24523 13.2132 5.39028 13.2132C5.39028 12.5007 5.39028 11.8387 5.39028 11.1446C5.60699 11.1446 5.79657 11.1489 5.98597 11.144C10.322 11.0321 14.6654 11.3839 18.996 10.943C20.1843 10.822 21.342 10.9718 22.5475 11.3616ZM12.6446 18.9488C12.646 22.8178 15.8363 25.9654 19.7513 25.9604C23.6841 25.9553 26.856 22.828 26.8596 18.952C26.8632 15.0829 23.6841 11.9426 19.7552 11.934C15.8465 11.9256 12.6433 15.0857 12.6446 18.9488Z"
                          fill="black"
                        />
                        <path
                          d="M5.38672 6.98438C10.0102 6.98438 14.5999 6.98438 19.2268 6.98438C19.2268 7.66047 19.2268 8.33081 19.2268 9.02556C14.6163 9.02556 10.0165 9.02556 5.38672 9.02556C5.38672 8.35591 5.38672 7.69516 5.38672 6.98438Z"
                          fill="black"
                        />
                        <path
                          d="M25.6484 18.0115C25.0672 18.8937 24.5206 19.7238 23.9403 20.6049C23.4538 19.6659 23.0022 18.7938 22.5258 17.874C22.8463 17.874 23.1156 17.874 23.5528 17.874C23.2036 17.3414 22.9707 16.856 22.6206 16.4755C21.2641 15.0009 18.7667 14.871 17.3108 16.1621C15.6513 17.6337 15.4398 19.9304 16.8785 21.5268C17.2755 21.9674 17.8352 22.2738 18.3459 22.603C18.698 22.83 18.8754 23.0944 18.7163 23.3649C18.5236 23.6927 18.2489 23.6841 17.9182 23.5451C15.7907 22.6508 14.5816 20.5306 14.942 18.3006C15.2988 16.0931 17.187 14.3616 19.4838 14.2276C21.8093 14.0918 23.7845 15.5408 24.4296 17.4425C24.5758 17.8735 24.7656 18.0298 25.195 17.9746C25.3181 17.9589 25.4479 17.9934 25.6484 18.0115Z"
                          fill="black"
                        />
                      </svg>{" "}
                      Subscription and Billing
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="accountSetting">
                      {" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9836 0.00232141C14.3478 0.00260158 14.7121 -0.00412252 15.0761 0.0041145C15.6832 0.0178429 16.1322 0.46819 16.1433 1.07409C16.1509 1.48482 16.1424 1.89583 16.1464 2.30667C16.1528 2.95902 16.5424 3.51236 17.149 3.75611C17.7611 4.00204 18.3713 4.25296 18.9795 4.50865C19.644 4.78809 20.2596 4.67568 20.7771 4.16706C21.0434 3.90521 21.3045 3.63787 21.5715 3.37681C22.0545 2.90472 22.68 2.89929 23.1668 3.37323C23.6552 3.84868 24.1375 4.33068 24.6139 4.81812C25.0988 5.31419 25.0893 5.93572 24.5994 6.43241C24.3305 6.70496 24.0541 6.97012 23.787 7.2444C23.3179 7.72618 23.2094 8.35125 23.4713 8.97407C23.7348 9.60042 23.991 10.2298 24.251 10.8575C24.5011 11.4616 25.0393 11.826 25.6836 11.8274C26.0852 11.8282 26.4867 11.8247 26.8883 11.8284C27.4851 11.8338 27.9579 12.246 27.9796 12.8425C28.0074 13.607 28.0076 14.3742 27.9773 15.1385C27.9544 15.7192 27.4827 16.1278 26.8986 16.136C26.4878 16.1417 26.0768 16.1319 25.666 16.1385C25.0148 16.149 24.5405 16.463 24.2762 17.0449C23.9722 17.7139 23.6952 18.3964 23.436 19.0842C23.2174 19.6647 23.3268 20.2091 23.75 20.6687C24.0281 20.9706 24.3343 21.2465 24.6194 21.5422C25.0916 22.0318 25.094 22.6508 24.6202 23.1368C24.1444 23.6249 23.662 24.1068 23.1747 24.5833C22.6796 25.0676 22.0514 25.0587 21.56 24.571C21.2948 24.3079 21.0338 24.0407 20.7673 23.7791C20.2758 23.2967 19.6435 23.1813 19.0152 23.4449C18.3982 23.7039 17.7795 23.9588 17.1584 24.2077C16.5381 24.4564 16.1536 25.0071 16.1484 25.6799C16.1453 26.0814 16.1533 26.4831 16.1453 26.8844C16.1333 27.4909 15.6892 27.9454 15.0795 27.9561C14.3607 27.9686 13.6413 27.9681 12.9225 27.9564C12.317 27.9465 11.8782 27.5066 11.8511 26.8869C11.834 26.4954 11.8481 26.1026 11.8452 25.7105C11.8396 24.9855 11.4854 24.4709 10.8172 24.1994C10.1974 23.9476 9.57913 23.6916 8.96192 23.4335C8.36459 23.1837 7.71975 23.3042 7.25657 23.7613C6.97741 24.0367 6.70553 24.3196 6.42312 24.5917C5.93579 25.0611 5.31039 25.0581 4.82777 24.5829C4.34207 24.1046 3.86017 23.6224 3.38147 23.1371C2.9081 22.6572 2.90742 22.0281 3.3785 21.5426C3.65156 21.2611 3.93408 20.9889 4.21022 20.7104C4.666 20.2507 4.7872 19.6056 4.53746 19.005C4.27309 18.3692 4.01124 17.7323 3.75007 17.0952C3.51422 16.5198 2.95432 16.1386 2.33548 16.1369C1.93394 16.1358 1.53235 16.1402 1.13086 16.1357C0.482321 16.1284 0.0144919 15.6726 0.006535 15.0274C-0.00209426 14.3271 -0.0023184 13.6266 0.0067031 12.9264C0.0149962 12.2801 0.484058 11.8302 1.13361 11.8277C1.52579 11.8261 1.91803 11.8282 2.31021 11.8273C2.94811 11.826 3.51192 11.4483 3.75147 10.8631C4.01589 10.2172 4.29108 9.57543 4.54177 8.92425C4.7765 8.31449 4.68382 7.74966 4.22686 7.26721C3.95728 6.98255 3.671 6.7137 3.39845 6.43179C2.89695 5.91303 2.89846 5.30657 3.40097 4.79997C3.86791 4.32928 4.33669 3.86039 4.80788 3.39401C5.31364 2.8934 5.93377 2.89217 6.44307 3.38976C6.71691 3.65732 6.98385 3.93183 7.25708 4.20001C7.72356 4.65798 8.36459 4.77929 8.96253 4.53061C9.58883 4.27016 10.2157 4.01106 10.8438 3.75482C11.4586 3.50395 11.8315 2.96838 11.8401 2.30477C11.845 1.92194 11.8362 1.539 11.8425 1.15623C11.8543 0.441853 12.2941 0.00680414 13.0029 0.00237744C13.33 0.000360211 13.6569 0.00204124 13.9836 0.00232141ZM14 8.60973C11.0287 8.60194 8.63748 10.9952 8.61899 13.9706C8.60055 16.9359 11.0633 19.343 13.9822 19.3529C16.8215 19.3625 19.3605 17.0781 19.3797 14.0022C19.3982 11.021 16.9907 8.61752 14 8.60973Z"
                          fill="black"
                        />
                      </svg>
                      Account Setting
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="myDetails">
                    <div className="shadow-step mb-5">
                      <div className="first-step">
                        <div>
                          <h3>My Details</h3>
                          <div className="d-flex justify-content-between border-bottom mb-3">
                            <h5>Personel Information </h5>
                            <i className="fas fa-pencil-alt"></i>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <p>
                              Assertively utilize adaptive customer service for
                              future proof plateform, Completely drive optimal
                              markets.
                            </p>
                          </div>
                          <div className="col-sm-8">
                            <form className="form-myDetails">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="firstName">
                                      First Name:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="firstName"
                                      placeholder="Enter First Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="lastName"
                                      placeholder="Enter Last Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="street">Street:</label>
                                    <select className="form-select" id="street">
                                      <option value="">Select Street</option>
                                      <option value="street1">Street 1</option>
                                      <option value="street2">Street 2</option>
                                      <option value="street3">Street 3</option>
                                      {/* Add more options as needed */}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="city">City:</label>
                                    <select className="form-select" id="city">
                                      <option value="">Select City</option>
                                      <option value="city1">City 1</option>
                                      <option value="city2">City 2</option>
                                      <option value="city3">City 3</option>
                                      {/* Add more options as needed */}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="province">Province:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="province"
                                      placeholder="Enter Province"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="postalCode">
                                      Postal Code:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="postalCode"
                                      placeholder="Enter Postal Code"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="phoneNumber">
                                      Phone Number:
                                    </label>
                                    <input
                                      type="tel"
                                      className="form-control"
                                      id="phoneNumber"
                                      placeholder="Enter Phone Number"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="email">
                                      Email Address:
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                      placeholder="Enter Email Address"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-save">
                                Save
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="previousOrder">
                    <div className="shadow-step mb-5">
                      <div className="second-step">
                        <div>
                          <h3>Previous Order</h3>
                          <table className="table">
                            <thead className="thead-dark">
                              <tr>
                                <th>Selections</th>
                                <th>Total Points</th>
                                <th>Status</th>
                                <th>Order ID</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* Table content goes here */}
                              <tr>
                                <td>6 Items</td>
                                <td>50 Points</td>
                                <td>Completed</td>
                                <td>#12345</td>
                                <td>
                                  <i className="fas fa-eye"></i>
                                  <i className="fas fa-pencil"></i>
                                  {/* <button className="btn btn-primary">View</button> */}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="subscription">
                    <div className="shadow-step mb-5">
                      <div className="third-step">
                        <div>
                          <h3>Subscription and billing</h3>
                          <div>
                            <p>Active Subscription </p>
                          </div>
                        </div>
                        <div>
                          <div className="payemnt-method">
                            <div>
                              <h4>Payment Method</h4>
                              <p>Modify your Payment Method Fo Future</p>
                            </div>
                            <div>
                              <button className="btn btn-save">Update</button>
                            </div>
                          </div>
                          <div className="payemnt-method">
                            <div>
                              <h4>Address</h4>
                              <p>
                                4517 Washington Ave. Manchester, Kentucky 39495
                              </p>
                            </div>
                            <div>
                              <button className="btn btn-save">Change</button>
                            </div>
                          </div>
                          <div className="payemnt-method d-block">
                            <div>
                              <h4>Billing History</h4>
                            </div>
                            <div>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Invoice</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* Table content goes here */}
                                  <tr>
                                    <td>2024-03-27</td>
                                    <td>Service</td>
                                    <td>Completed</td>
                                    <td>$100.00</td>
                                    <td>INV12345</td>
                                  </tr>
                                  {/* Add more rows as needed */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="payemnt-method">
                            <div>
                              <h4>Pause or Cancel Subscription</h4>
                              <p>
                                By Canceling your account you will loose your
                                data.
                              </p>
                            </div>
                            <div>
                              <a href="">Cancel subscription</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="accountSetting">
                    <div className="shadow-step mb-5">
                      <div className="fourth-step">
                        <div>
                          <h3>Account setting</h3>
                          <div className="d-flex justify-content-between border-bottom mb-3">
                            <p>Password </p>
                            <i className="fas fa-pencil-alt"></i>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <p>
                              Assertively utilize adaptive customer service for
                              future proof plateform, Completely drive optimal
                              markets.
                            </p>
                          </div>
                          <div className="col-sm-8">
                            <form className="form-myDetails">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="Password">Password:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="Password"
                                      placeholder="***********"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-save">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
