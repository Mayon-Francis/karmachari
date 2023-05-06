import React, { useContext, useState } from "react";
import styles from "../../styles/student/Profile.module.css";
import { FiEdit } from "react-icons/fi";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineAcademicCap, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import CustomTitle from "@/utils/customTitle";
import EditCompanyProfileModal from "@/components/EditCompanyProfileModal/EditCompanyProfileModal";
import UserContext from "@/contexts/userContext";
const CompanyProfiile = () => {
  const [open, setOpen] = useState(false);
  const { userData, user } = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomTitle title="Company Profile" />
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
            <div>Description</div>
            <div
              className={styles.edit__pro_abtMe_bx}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {userData.description
                ? userData.description
                : "Description Not Added"}
              {/* {profile.about ? (
              profile.about
            ) : (
              <div className="skill">About Section Not Added</div>
            )} */}
            </div>
          </div>

          <div className={styles.edit__pro_skls}>
            <div>Category</div>
            <div className={styles.edit__pro_skls_bx}>
              {userData.category ? (
                userData.category
              ) : (
                <div className="skill">No Category Added</div>
              )}

              {/* {profile.skills ? (
              profile.skills.map((skill, index) =>
                index === profile.skills.length - 1 ? (
                  <div className="skill" key={index}>
                    {skill}
                  </div>
                ) : (
                  <div className="skill" key={index}>
                    {skill} ,
                  </div>
                )
              )
            ) : (
              <div className="skill">No Skills Added</div>
            )} */}
            </div>
          </div>
          {/* 
          <div className={styles.edit__pro_achvmts}>
            <div>Description</div>
            <div
              className={styles.edit__pro_achvmts_bx}
              style={{ whiteSpace: "pre-wrap" }}
            >
              Google offers a diverse range of job opportunities to new
              candidates with different skills and experience levels. Whether
              you are interested in engineering, sales and marketing, operations
              and support, design, or corporate functions, Google has a job
              category that suits your interests and career goals. As a global
              technology leader, Google values innovation, creativity, and
              collaboration, and offers a dynamic work environment that
              encourages personal and professional growth. With a competitive
              compensation package, comprehensive benefits, and opportunities
              for career advancement, Google is a great place to launch or
              advance your career in the technology industry.
             {profile.achievements ? (
              profile.achievements
            ) : (
              <div className="skill">No Achievements Added</div>
            )} 
            </div> 
          </div>*/}

          <div className={styles.edit__pro_achvmts}>
            <div>Address</div>
            <div
              className={styles.edit__pro_achvmts_bx}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {userData.address ? (
                userData.address
              ) : (
                <div className="skill">No Address Added</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <EditCompanyProfileModal open={open} handleClose={handleClose} />
    </>
  );
};
export default CompanyProfiile;
