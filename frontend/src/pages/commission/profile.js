import React, { useContext, useState } from "react";
import styles from "../../styles/student/Profile.module.css";
import { FiEdit } from "react-icons/fi";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import CustomTitle from "@/utils/customTitle";
import Lottie from "lottie-react";
import userlanding from "../../assets/animations/schoolcommLanding.json";
import EditCommissionerProfileModal from "@/components/EditCommissionerProfileModal/EditCommissionerProfileModal";
import UserContext from "@/contexts/userContext";
const CommissionProfile = () => {
  const [open, setOpen] = useState(false);
  const { userData, user } = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomTitle title="Commission Profile" />
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
              {/* <div className={styles.profile_phone}>
                <HiOutlineAcademicCap size={25} />
                <div>
                  CSE
                  {"  "}
                  2024
                </div>
              </div> */}

              <div className={styles.profile_phone}>
                <MdOutlineEmail size={25} />
                <div>
                  {(
                    <a
                      href={`mailto:${userData.email}}`}
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
                </div>
              <div className="profile_phone">
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
                </div>
              <div className="profile_phone">
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
          {/* <div className={styles.edit__pro_abtMe}>
            <div>About </div>
            <div
              className={styles.edit__pro_abtMe_bx}
              style={{ whiteSpace: "pre-wrap" }}
            >
              The Student Employment Commission is a government organization
              that helps students and recent graduates find employment
              opportunities in their field of study. Our mission is to support
              students as they transition from the classroom to the workforce by
              connecting them with employers who are seeking talented and
              motivated individuals.
              {profile.about ? (
              profile.about
            ) : (
              <div className="skill">About Section Not Added</div>
            )}
            </div>
          </div>

          <div className={styles.edit__pro_skls}>
            <div>Details</div>
            <div className={styles.edit__pro_skls_bx}>
              Our services include job matching, resume and cover letter review,
              career counseling, and job search resources. We work closely with
              employers across different industries to identify job
              opportunities that are suitable for students and recent graduates.
              Our team also provides training and workshops on job search
              strategies, interview skills, and professional development.
              {profile.skills ? (
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
            )}
            </div>
          </div>

          <div className={styles.edit__pro_achvmts}>
            <div>Achievements</div>
            <div
              className={styles.edit__pro_achvmts_bx}
              style={{ whiteSpace: "pre-wrap" }}
            >
              At the heart of our work is a commitment to promoting diversity
              and inclusivity in the workplace. We strive to connect students
              from all backgrounds with employers who value diversity and are
              committed to creating a welcoming and inclusive work environment.
              We also work closely with educational institutions to provide
              students with the skills and knowledge they need to succeed in
              their chosen career paths.
              <hr></hr>
              If you are a student or recent graduate looking for employment
              opportunities, we encourage you to connect with us and take
              advantage of our services. Our team is here to support you as you
              embark on your career journey and make a positive impact on the
              workforce.
              {profile.achievements ? (
              profile.achievements
            ) : (
              <div className="skill">No Achievements Added</div>
            )}
            </div>
        </div> */}
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
      <EditCommissionerProfileModal open={open} handleClose={handleClose} />
    </>
  );
};
export default CommissionProfile;
