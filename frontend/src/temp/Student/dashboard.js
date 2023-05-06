import React from "react";
import NewJobCard from "../../components/NewJobCard/NewJobCard";
import CustomTitle from "@/utils/customTitle";
import StudentNavbar from "@/components/StudentNavbar/StudentNavbar";
import styles from "../../styles/student/Dashboard.module.css";
import { FiBookmark } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { Filter, Tune } from "@mui/icons-material";
import AddFilterModal from "@/components/FiltersModal/AddFilterModal";
import userContext from "@/contexts/userContext";
import { useContext } from "react";
import { handleFetch } from "@/utils/requests";
import ViewStudentProfileModal from "@/components/ViewStudentProfileModal/ViewStudentProfileModal";
import { ClipLoader } from "react-spinners";

function StudentDashboard() {
  const { userData, user } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const jobs = ["Job 1", "Job 2"];
  const companies = ["Job 1", "Job 2"];
  const jobtypes = ["Job 1", "Job 2"];
  const dates = ["Job 1", "Job 2"];
  const onsiteremote = ["On site", "Remote"];
  const durations = ["Job 1", "Job 2"];
  const locations = ["Job 1", "Job 2"];
  const experiences = ["Job 1", "Job 2"];

  const [job, setJobs] = useState(null);
  const [company, setCompany] = useState(null);
  const [jobtype, setJobtype] = useState(null);
  const [date, setDate] = useState(null);
  const [or, setOr] = useState(null);
  const [duration, setDuration] = useState(null);
  const [location, setLocation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function openAddFilterModal() {
    setOpen(true);
  }

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (user) {
      setLoading(true);
      handleFetch(user.accessToken, "alljobs").then((res) => {
        console.log(res);
        setData(res);
        setLoading(false);
      });
    }
  }, [userData, user]);

  return (
    <>
      <CustomTitle title="Student Dashboard" />
      <StudentNavbar />
      <AddFilterModal
        open={open}
        handleClose={handleClose}
        company={company}
        date={date}
        duration={duration}
        experience={experience}
        job={job}
        jobtype={jobtype}
        location={location}
        or={or}
        setCompany={setCompany}
        setDate={setDate}
        setDuration={setDuration}
        setExpeirence={setExperience}
        setJobType={setJobtype}
        setJobs={setJobs}
        setOr={setOr}
        setLocation={setLocation}
      />
      <div className={styles.studentDashboard}>
        <div className={styles.filter__background}>
          <div className={styles.filter__container}>
            <div className={styles.filters}>
              {/* <select className={styles.filterbox} placeholder={"as"} name="jobs" id="select-jobs" value={job} onChange={(e)=>{setJobs(e.target.value)}}>
                     <option value="" default selected>Jobs</option>
                     {jobs.map((job)=>{
                      return <><option value={job}>{job}</option></>
                     })}
                  </select> */}
              <select
                className={styles.filterbox}
                name="company"
                id="select-company"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              >
                <option value="" default selected>
                  Company
                </option>
                {companies.map((job) => {
                  return (
                    <>
                      <option value={job}>{job}</option>
                    </>
                  );
                })}
              </select>
              <select
                className={styles.filterbox}
                name="jobtype"
                id="select-jobtype"
                value={jobtype}
                onChange={(e) => {
                  setJobtype(e.target.value);
                }}
              >
                <option value="" default selected>
                  Job Type
                </option>
                {jobtypes.map((job) => {
                  return (
                    <>
                      <option value={job}>{job}</option>
                    </>
                  );
                })}
              </select>
              <select
                className={styles.filterbox}
                name="date"
                id="select-date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              >
                <option value="" default selected>
                  Date Posted
                </option>
                {dates.map((job) => {
                  return (
                    <>
                      <option value={job}>{job}</option>
                    </>
                  );
                })}
              </select>
              {/* <select className={styles.filterbox}  name="onsite/remote" id="select-onsite/remote" value={or} onChange={(e)=>{setOr(e.target.value)}}>
                     <option value="" default selected>On-site/Remote</option>
                     {onsiteremote.map((job)=>{
                      return <><option value={job}>{job}</option></>
                     })}
                  </select> */}
              <select
                className={styles.filterbox}
                name="duration"
                id="select-duration"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              >
                <option value="" default selected>
                  Duration
                </option>
                {durations.map((job) => {
                  return (
                    <>
                      <option value={job}>{job}</option>
                    </>
                  );
                })}
              </select>
              <select
                className={styles.filterbox}
                name="location"
                id="select-location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="" default selected>
                  Location
                </option>
                {locations.map((job) => {
                  return (
                    <>
                      <option value={job}>{job}</option>
                    </>
                  );
                })}
              </select>
              {/* <select  className={styles.filterbox}  name="experience" id="select-experience" value={experience} onChange={(e)=>{setExperience(e.target.value)}}>
                     <option value="" default selected>Experience Level</option>
                     {experiences.map((job)=>{
                      return <><option value={job}>{job}</option></>
                     })}
                  </select> */}
              {/* <div className={styles.easyapply__button} onClick={()=>{}}>
                        Easy Apply
                  </div> */}
            </div>
            <div className={styles.applyfilters__button} onClick={() => {}}>
              Modify Search
            </div>
          </div>
        </div>
        <div className={styles.studentDashboard__content}>
          <div className={styles.jobDescription__container}>
            <div className={styles.jobDescription__container_header}>
              Job Description
            </div>
            <div className={styles.jobDescription__container_inner}>
              <div className={styles.jobDescription__container_inner__header}>
                <div
                  className={
                    styles.jobDescription__container_inner__header_left
                  }
                >
                  <div className={styles.jobDescription__container_inner__logo}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className={styles.jobDescription__container_inner__info}>
                    <div
                      className={
                        styles.jobDescription__container_inner__info__title
                      }
                    >
                      Software Engineer
                    </div>
                    <div
                      className={
                        styles.jobDescription__container_inner__info__company
                      }
                    >
                      Cisco
                    </div>
                    <div
                      className={
                        styles.jobDescription__container_inner__info__location
                      }
                    >
                      {"Bengaluru, Karnataka, India (On-Site)"}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles.jobDescription__container_inner__header_right
                  }
                >
                  <FiBookmark
                    className={
                      styles.jobDescription__container_inner__header_bookmark
                    }
                  />
                  <div
                    className={
                      styles.jobDescription__container_inner__header_apply
                    }
                  >
                    Full-time
                  </div>
                  <div
                    className={
                      styles.jobDescription__container_inner__header_apply
                    }
                  >
                    Posted 1 week ago
                  </div>
                </div>
              </div>
              <div
                className={styles.jobDescription__container_inner__description}
              >
                <div
                  className={
                    styles.jobDescription__container_inner__description_header
                  }
                >
                  Skills Required
                </div>
                <div
                  className={
                    styles.jobDescription__container_inner__description_skills
                  }
                >
                  Manual tester,testing domain, networking,TCP/IP networking and
                  network management, IPv6
                </div>
              </div>
              <div
                className={styles.jobDescription__container_inner__description}
              >
                <div
                  className={
                    styles.jobDescription__container_inner__description_header
                  }
                >
                  About the job
                </div>
                <div
                  className={
                    styles.jobDescription__container_inner__description_skills
                  }
                >
                  Cisco Next-Generation Fire Power Threat Défense (FTD) is the
                  flagship product from Security Business Group (SBG). FTD
                  integrates aware-willing ASA Firewall services and the world's
                  best and most well-known IPS engine SNORT in to a
                  high-performance appliance. It is an extremely successful
                  product and continues to lead the market with threat centric
                  focus and market-differentiating features. Though we take
                  great pride in being market leaders in threat security for a
                  long time, we are constantly innovating and enhancing our
                  solutions to address the ever-changing threat perceptions and
                  changing data security paradigms so that our customers are
                  always secured. We take our customers' trust in us very
                  seriously and go all the way to ensure we protect their data
                  all times. Our team works on leading security and threat
                  mitigation solutions that are high-performing, scalable and
                  easily manageable.Currently, the team in India is looking for
                  talented and motivated individuals who can work effectively in
                  a team-oriented environment and lead/contribute to the
                  development and testing of our next-generation firewall
                  technologies.
                </div>
              </div>
              <div
                className={styles.jobDescription__container_inner__description}
              >
                <div className={styles.registration__form__register__button}>
                  Apply Now <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.jobCards__container}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className={styles.jobDescription__container_header}>
                Available Jobs
              </div>
              <div
                className={styles.filter__mobile}
                onClick={() => {
                  openAddFilterModal();
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Filter
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Tune />
                </div>
              </div>
            </div>

            {data.length === 0 ? (
              loading ? (
                <ClipLoader color="#00487c" size={50} />
              ) : (
                <div
                  style={{
                    padding: "5rem",
                  }}
                >
                  No Jobs Available{" "}
                </div>
              )
            ) : (
              <div className={styles.jobCards__container_1}>
                {data.map((job) => {
                  return (
                    <>
                      <NewJobCard job={job} />
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
