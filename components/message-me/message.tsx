import React, { useEffect, useState } from "react";
import styles from "./message.module.scss";
import Image from "next/image";
import FirstScreen from "./screens/first";
import SecondScreen from "./screens/second";
import ThirdScreen from "./screens/third";
import FourthScreen from "./screens/fourth";

interface Props {
  showModelValue: boolean;
  handleState: (value: boolean) => void;
}

function Message({ showModelValue, handleState }: Props) {
  const [showModal, setShowModal] = useState<boolean>(showModelValue);

  useEffect(() => {
    handleState(showModal);
  }, [showModal]);

  useEffect(() => {
    setShowModal(showModelValue);
  }, [showModelValue]);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [firstScreenValues, setFirstScreenValues] = useState<any>({});
  const [secondScreenValues, setSecondScreenValues] = useState<any>({});
  const [thirdScreenValues, setThirdScreenValues] = useState<any>({});
  const [fourthScreenValues, setFourthScreenValues] = useState<any>({});

  const StepperFormComponent = React.useCallback(() => {
    switch (currentStep) {
      case 0:
        return (
          <FirstScreen
            handleState={(value) => setFirstScreenValues(value)}
            isNext={(value) => setIsNext(value)}
            value={firstScreenValues}
            handleStep={(value) => setCurrentStep(value)}
          />
        );
      case 1:
        return (
          <SecondScreen
            handleState={(value) => setSecondScreenValues(value)}
            isNext={(value) => setIsNext(value)}
            value={secondScreenValues}
            handleStep={(value) => setCurrentStep(value)}
          />
        );
      case 2:
        return (
          <ThirdScreen
            handleState={(value) => setThirdScreenValues(value)}
            isNext={(value) => setIsNext(value)}
            value={thirdScreenValues}
            handleStep={(value) => setCurrentStep(value)}
          />
        );
      case 3:
        return (
          <FourthScreen
            handleState={(value) => setFourthScreenValues(value)}
            isNext={(value) => setIsNext(value)}
            value={fourthScreenValues}
          />
        );

      default:
        null;
    }
  }, [currentStep, firstScreenValues, secondScreenValues, thirdScreenValues]);

  return (
    <div
      className={styles.popupContainer}
      style={{ display: showModal ? "flex" : "none" }}
    >
      <div className={styles.modelboxpopup}>
        <div className={styles.modelform}>
          <div className={styles.formsignup}>
            <div className="simply-col-12">
              <div
                className={styles.modelheader}
                style={{ display: currentStep === 3 ? "none" : "block" }}
              >
                {/* <h4>Contact Davis</h4>
                <p className={styles.modelsubheading}>
                  What do you want to contact Davis about?
                </p> */}
                <p>Seller account successfully created</p>
<h4>Start adding your business details:</h4>
                <div className={styles.linestrip}></div>

                <ul className={styles.modelpoptabstyle}>
                  <li className={currentStep === 0 ? styles.active : ""}>
                    {" "}
                    <a href="#">Create Account</a>{" "}
                  </li>
                  <li className={currentStep === 1 ? styles.active : ""}>
                    {" "}
                    <a href="#">Business Details</a>{" "}
                  </li>
                  <li className={currentStep === 2 ? styles.active : ""}>
                    {" "}
                    <a href="#">Product Profile</a>{" "}
                  </li>
                </ul>
 {/*
                <span
                  className={` ${styles.skip} ${styles.iconadd}`}
                  onClick={() => setShowModal(!showModal)}
                >
                  <Image
                    src="/svg/modelclose.svg"
                    width={12}
                    height={12}
                    alt="image"
                  />
                </span>*/}
              </div>
              <div className="d-flex justify-content-end " style={{ display: currentStep === 3 ? "block" : "none" }}>
                 <span
                  className={` ${styles.skip} ${styles.iconadd}`}
                  onClick={() => setShowModal(!showModal)}
                >
                  {/* <Image
                    src="/svg/modelclose.svg"
                    width={12}
                    height={12}
                    alt="image"
                  /> */}
                </span></div>
            </div>

            {StepperFormComponent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
