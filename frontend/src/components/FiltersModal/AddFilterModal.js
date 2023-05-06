import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { districts, jobCategories, schools } from "@/configs";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../../styles/student/Dashboard.module.css";
import { useState } from "react";

function AddFilterModal({
  open,
  handleClose,
  job,
  setJobs,
  company,
  setCompany,
  jobtype,
  setJobtype,
  date,
  setDate,
  or,
  setOr,
  duration,
  setDuration,
  location,
  setLocation,
  experience,
  setExperience,
}) {
  const jobs = ["Job 1", "Job 2"];
  const companies = ["Job 1", "Job 2"];
  const jobtypes = ["Job 1", "Job 2"];
  const dates = ["Job 1", "Job 2"];
  const onsiteremote = ["On site", "Remote"];
  const durations = ["Job 1", "Job 2"];
  const locations = ["Job 1", "Job 2"];
  const experiences = ["Job 1", "Job 2"];
  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "#c9e9ff",
          color: "#00487c",
          borderRadius: "1rem",
          padding: "1rem",
          fontFamily: "Mulish",
        },
      }}
      BackdropProps={{
        style: {
          opacity: 0.5,
          background:
            "linear-gradient(90deg, #0C4C82 -13.51%, #0D4F84 -12.59%, #187BA2 5.14%, #1F9BB8 20.99%, #24AFC5 34.24%, #26B6CA 43.28%, #30B9C7 50.27%, #4DBFBE 62.37%, #7ACBAF 78.1%, #B1D89E 94.53%)",
        },
      }}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className={styles.title}>Filters</div>
      </DialogTitle>
      <DialogContent
        sx={{ "&::-webkit-scrollbar": { display: "none" }, padding: 0 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <div className={styles.filter__background__mobile}>
            <div className={styles.filter__container}>
              <div className={styles.filters}>
                <select
                  className={styles.filterbox}
                  placeholder={"as"}
                  name="jobs"
                  id="select-jobs"
                  value={job}
                  onChange={(e) => {
                    setJobs(e.target.value);
                  }}
                >
                  <option value="" default selected>
                    Jobs
                  </option>
                  {jobs.map((job) => {
                    return (
                      <>
                        <option value={job}>{job}</option>
                      </>
                    );
                  })}
                </select>
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
                <select
                  className={styles.filterbox}
                  name="onsite/remote"
                  id="select-onsite/remote"
                  value={or}
                  onChange={(e) => {
                    setOr(e.target.value);
                  }}
                >
                  <option value="" default selected>
                    On-site/Remote
                  </option>
                  {onsiteremote.map((job) => {
                    return (
                      <>
                        <option value={job}>{job}</option>
                      </>
                    );
                  })}
                </select>
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
                <select
                  className={styles.filterbox}
                  name="experience"
                  id="select-experience"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                >
                  <option value="" default selected>
                    Experience Level
                  </option>
                  {experiences.map((job) => {
                    return (
                      <>
                        <option value={job}>{job}</option>
                      </>
                    );
                  })}
                </select>
                <div className={styles.easyapply__button} onClick={() => {}}>
                  Easy Apply
                </div>
              </div>
              <div className={styles.applyfilters__button} onClick={() => {}}>
                Modify Search
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddFilterModal;
