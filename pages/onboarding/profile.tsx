import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
// import Message from "../../.././components/message-me/message";

import Message from "../../components/message-me/message";
// import Navbar from "../../.././components/navbar/navbar";
import Styles from "../../styles/pages/expert-web/expertweb.module.scss";
import styles from "../../styles/pages/expert-web/profile.module.scss";


const Profile = () => {
  const router = useRouter();

  const [currentPlan, setCurrentPlan] = useState<string>("Expertise");
  const [search, setSearch] = useState<string>("");
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className={styles.conatiner}>
      {/* <Navbar  /> */}

            <Message
        showModelValue={showPopup}
        handleState={(value) => setShowPopup(value)}
      />
    </div>
  );
};
export default Profile;
