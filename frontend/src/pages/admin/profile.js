import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/student/Profile.module.css";
import { FiEdit } from "react-icons/fi";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import Lottie from "lottie-react";
import userlanding from "../../assets/animations/userlanding.json";

import CustomTitle from "@/utils/customTitle";
import EditCommissionerProfileModal from "@/components/EditCommissionerProfileModal/EditCommissionerProfileModal";
import UserContext from "@/contexts/userContext";
const AdminProfile = () => {
  const [open, setOpen] = useState(false);
  const { userData, user } = useContext(UserContext);

  useEffect(() => {
    console.log("Userdata: " + userData);
  }, [user]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomTitle title="Admin Profile" />
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
              {user == null || user.displayName == null
                ? "JAISON DENNIS"
                : userData.name}
            </div>

            <div className={styles.phone_class}>
              <div className={styles.profile_phone}>
                <BsTelephoneInbound size={25} />
                <div>
                  {userData.phone_no ? (
                    <a
                      href={`tel:+91${userData.phone_no}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {userData.phone_no}
                    </a>
                  ) : (
                    <div className="change-in-edit">{"<empty>"}</div>
                  )}
                </div>
              </div>

              <div className={styles.profile_phone}>
                <MdOutlineEmail size={25} />
                <div>
                  {(
                    <a
                      href={`mailto:${
                        user == null || user.email == null
                          ? "jaisondennis090@gmail.com"
                          : user.email
                      }}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user == null || user.email == null
                        ? "jaisondennis090@gmail.com"
                        : user.email}
                    </a>
                  ) || <div className={styles.change_in_edit}>{"<empty>"}</div>}
                </div>
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

          {/* <div className={styles.edit__pro_achvmts}>
            <div>Achivements</div>
            <div
              className={styles.edit__pro_achvmts_bx}
              style={{ whiteSpace: "pre-wrap" }}
            >
               {profile.achievements ? (
              profile.achievements
            ) : (
              <div className="skill">No Achievements Added</div>
            )} 
            </div>
          </div> */}
          {/*<div className={styles.edit__pro_projects}>
            <div>Projects</div>
            <div className={styles.developer_details_body_right_content_1}>
              <div
                className={
                  styles.developer_details_body_right_content_projects_1
                }
              >
                {/* {count ? (
                    projects.map((project, index) => {
                      return project.teamMembers?.find(
                        (member) => member === currentUser.email
                      ) ? (
                        <div
                          className="developer_details_body_right_content_project"
                          key={index}
                          data-aos="fade-up"
                          data-aos-duration="1500"
                          onClick={() => {
                            history.push(`/projects/${project.id}`);
                          }}
                        >
                          <div className="developer_details_body_right_content_project_img">
                            <img
                              src={
                                project.projectPhoto ||
                                "https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                              }
                              alt=""
                            />
                          </div>
                          <div className="developer_details_body_right_content_project_title">
                            {project.name}
                          </div>
                          <div className="developer_details_body_right_content_project_lead">
                            {project.leader_name}
                          </div>
                        </div>
                      ) : null;
                    })
                  ) : (
                    <div className="skill">No Projects Added</div>
                  )} 
              </div>
            </div>
          </div>*/}
        </div>
      </div>
      <EditCommissionerProfileModal open={open} handleClose={handleClose} />
    </>
  );
};
export default AdminProfile;
