import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import { messageMe1Validations } from "../../../validations/profileValidations";
//import styles from "../message.module.scss";
import styles from "../message.module.scss";
import { FormProps } from "../types";

function SecondScreen({ isNext, handleState, value, handleStep }: FormProps) {
  return (
    <>
      <Formik
        initialValues={{
          pain_point: "",
          tried_so_far: "",
          desired_outcome: "",
          desired_gst: "",
          desired_pan: "",
          desired_address: "",
          desired_year: ""
        

        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {}}
        validationSchema={messageMe1Validations}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isValid,
          dirty,
          /* and other goodies */
        }) => {
          handleState(values);
          isNext(isValid);
          return (
            <Form
              onSubmit={handleSubmit}
              style={{ width: "100%" }}
              className="simply-col-12"
            >

              
              <div className={styles.inputbox}>
                <label>Your Name </label>
                <input
                  type="text"
                  name="pain_point"
                  className={styles.inputform}
                  placeholder="Enter Name"
                  value={values.pain_point.replace(/\s{2,}/g, " ")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="pain_point">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>
              

              <div className={styles.inputbox}>
                <label>Company/Business/Shop Name  </label>
                <input
                  type="text"
                  name="tried_so_far"
                  className={styles.inputform}
                  placeholder="Business Name"
                  value={values.tried_so_far.replace(/\s{2,}/g, " ")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="tried_so_far">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>

              <div className={styles.inputbox}>
                <label>Email </label>
                <input
                  type="text"
                  name="desired_outcome"
                  className={styles.inputform}
                  placeholder="Enter Email "
                  value={values.desired_outcome.replace(/\s{2,}/g, " ")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="desired_outcome">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>

              <div className={styles.inputbox}>
                <label>Merchant Designation </label>
                <input
                  type="text"
                  name="pain_point"
                  className={styles.inputform}
                  placeholder="Enter Designation"
                  value={values.pain_point.replace(/\s{2,}/g, " ")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="pain_point">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>

              <div className={styles.inputbox}>
                <label>Merchant Address  </label>
                <input
                  type="text"
                  name="desired_address"
                  className={styles.inputform}
                  placeholder="Merchant Address"
                  value={values.desired_address.replace(/\s{2,}/g, " ")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="desired_outcome">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>
              <div className={styles.inputbox}>
                <label>Year of establishment  </label>
                <input
                  type="text"
                  name="desired_year"
                  className={styles.inputform}
                  placeholder="Year"
                  value={values.desired_year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="desired_year">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>
              <div className={styles.inputbox}>
                <label>GST No.  </label>
                <input
                  type="text"
                  name="desired_gst"
                  className={styles.inputform}
                  placeholder="GST no."
                  value={values.desired_gst}
                  maxLength={15}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="desired_gst">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>
              <div className={styles.inputbox}>
                <label>PAN No.  </label>
                <input
                  type="text"
                  name="desired_pan"
                  className={styles.inputform}
                  placeholder="Pan no."
                  value={values.desired_pan}
                  maxLength={10}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="pan">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>

              <div className={`${styles.modelfooter} simply-row `}>
                <div className="simply-col-12 p-0">
                  <button
                    type="submit"
                    className={`bluebgbtn smbtn ${
                      isValid && dirty ? "smactivebtn" : ""
                    }bluebgbtn simply-col-12`}
                    id="nextBtn"
                    disabled={!isValid || !dirty}
                    onClick={() => {
                      handleStep(1);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default SecondScreen;
