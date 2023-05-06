import React, { useContext, useState } from "react";
import styles from "../../styles/student/Profile.module.css";
import { FiEdit } from "react-icons/fi";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineAcademicCap, HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Lottie from "lottie-react";
import userlanding from "../../assets/animations/schoolcommLanding.json";
import CustomTitle from "@/utils/customTitle";
import EditSchoolProfileModal from "@/components/EditSchoolProfileModal/EditSchoolProfileModal";

import UserContext from "@/contexts/userContext";
const SchoolProfile = () => {
  const [open, setOpen] = useState(false);
  const { userData, user } = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomTitle title="School Profile" />
      <div className={styles.my_profile_container}>
        <div className={styles.profile_board}>
          <div className={styles.pro_image_container}>
            <img
              src={
                "https://sabt.center/wp-content/uploads/2014/08/avatar-1.png"
              }
              className={styles.profile_image}
              alt=""
            />
          </div>

          <div className={styles.profile_details_container}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <FiEdit
                size={36}
                style={{
                  cursor: "pointer",
                  alignItems: "flex-end",
                }}
                alt=""
                onClick={() => setOpen(true)}
              />
            </div>

            <div className={styles.profile_details_header_name}>
              {userData.name}
            </div>

            <div className={styles.phone_class}>
              <div className={styles.profile_phone}>
                <BsTelephoneInbound size={25} />
                <div>
                  {userData.phone ? (
                    <a
                      href={`tel:+91${userData.phone}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {userData.phone}
                    </a>
                  ) : (
                    <div className="change-in-edit">{"<empty>"}</div>
                  )}
                </div>
              </div>
              <div className={styles.profile_phone}>
                <HiOutlineOfficeBuilding size={25} />
                <div>{userData.district}</div>
              </div>

              <div className={styles.profile_phone}>
                <MdOutlineEmail size={25} />
                <div>
                  {(
                    <a
                      href={`mailto:${userData.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {userData.email}
                    </a>
                  ) || <div className={styles.change_in_edit}>{"<empty>"}</div>}
                </div>
              </div>
              <div className={styles.profile_phone}>
                <IoPersonSharp size={25} />
                <div>{userData.principal}</div>
              </div>
              {/* <div className="profile_phone">
                  <TbNetwork size={25} />
                  <div>
                    {profile.website ? (
                      <a
                        href={profile?.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Portfolio Website
                      </a>
                    ) : (
                      <div className="change-in-edit">{"<empty>"}</div>
                    )}
                  </div>
                </div> */}
              {/* <div className="profile_phone">
                  <VscGithubInverted size={25} />
                  <div>
                    {profile.github ? (
                      <a
                        href={profile?.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @{getGithubUsername(profile.github)}
                      </a>
                    ) : (
                      <div className="change-in-edit">{"<empty>"}</div>
                    )}
                  </div>
                </div> */}
              {/* <div className="profile_phone">
                  <FaLinkedin size={25} />
                  <div>
                    {profile.linkedin ? (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @{getLinkedinUsername(profile.linkedin)}
                      </a>
                    ) : (
                      <div className="change-in-edit">{"<empty>"}</div>
                    )}
                  </div>
                </div> */}
            </div>
          </div>
        </div>

        <div className={styles.edit__pro_box}>
          <div className={styles.edit__pro_abtMe}>
            <div className={styles.login_container__left}>
              <Lottie
                style={{ width: "50vw" }}
                animationData={userlanding}
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
      <EditSchoolProfileModal open={open} handleClose={handleClose} />
    </>
  );
};
export default SchoolProfile;
