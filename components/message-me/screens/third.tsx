import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";

import { FormProps } from "../types";
import Image from "next/image";
import styles from "../../../styles/home/hometrade.module.scss"


function ThirdScreen({ isNext, handleState, value, handleStep }: FormProps) {


  return (
    <>
      <Formik
        initialValues={{
          title: "",
          pain_point: "",
          tried_so_far: "",
          desired_outcome: "",
          companyName: "",
          startDate: "",
          endDate: "",
          description: "",
          id: 0,
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // handlePushValues(values);
        }}
      // validationSchema={addExperienceValidation}

      // isInitialValid={Object.keys(value).length === 0 ? false : true}
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

              <ul className={styles.requirementstylebox}>
                <li className={styles.requirementstyle}>
                  <div className={styles.checkicon}>
                    <Image
                      src="/svg/check.svg"
                      width={32}
                      height={32}
                      alt="check"
                    />
                  </div>
                  <div className={styles.inputbox}>
                    <label>Product Name  </label>
                    <input
                      type="text"
                      name="tried_so_far"
                      className={styles.inputform}
                      placeholder="Product-name"
                      value={values.tried_so_far.replace(/\s{2,}/g, " ")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="tried_so_far">
                      {(msg) => <span className="validation-error">{msg}</span>}
                    </ErrorMessage>
                  </div>

                  {/* <div className={styles.requiremetheading}>Need help with Linkedin Automation</div>
                  <div className={styles.requirementcontent}>Created 7th December 2021</div> */}
                </li>
                <li className={styles.requirementstyle}>
                  <div className={styles.checkicon}>
                    <Image
                      src="/svg/check.svg"
                      width={32}
                      height={32}
                      alt="check"
                    />
                  </div>
                  {/* <div className={styles.requiremetheading}>Need help with Linkedin Automation</div>
                  <div className={styles.requirementcontent}>Created 7th December 2021</div> */}

<div className={styles.inputbox}>
                <label>Description </label>
                <input
                  type="text"
                  name="tried_so_far"
                  className={styles.inputform}
                  placeholder="Description"
                  value={values.tried_so_far.replace(/\s{2,}/g, " ")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="tried_so_far">
                  {(msg) => <span className="validation-error">{msg}</span>}
                </ErrorMessage>
              </div>
                </li>
                {/* <li className={styles.requirementstyle}>
                  <div className={styles.checkicon}>
                    <Image
                      src="/svg/check.svg"
                      width={32}
                      height={32}
                      alt="check"
                    />
                  </div>
                  <div className={styles.requiremetheading}>Need help with Linkedin Automation</div>
                  <div className={styles.requirementcontent}>Created 7th December 2021</div>
                </li> */}

              </ul>
              {/* <a href="" className={styles.createrequirementbtn}>

                <Image
                  src="/svg/ant-design_plus-outlined.svg"
                  width={24}
                  height={24}
                  alt="check"
                />
                Create new requirement </a> */}






              <div className={`${styles.modelfooter} simply-row `}>
                <div className="simply-col-12 p-0">
                  <button
                    type="submit"
                    className={`bluebgbtn smbtn ${isValid && dirty ? "smactivebtn" : ""
                      } simply-col-12`}
                    id="nextBtn"
                    // disabled={!isValid || !dirty}
                    onClick={() => {
                      handleStep(3);
                    }}
                  >
                    Submit
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

export default ThirdScreen;
