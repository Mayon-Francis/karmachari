import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CustomTitle from "@/utils/customTitle";
import styles from "../../../styles/student/Dashboard.module.css";
import NewJobCard from "@/components/NewJobCard/NewJobCard";
import { handleFetch } from "@/utils/requests";

import ViewStudentProfileModal from "@/components/ViewStudentProfileModal/ViewStudentProfileModal";
import { ClipLoader } from "react-spinners";

function CommissionDashboard() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  //for view profile
  function handleClose() {
    setOpen(false);
  }

  function openStudentProfileModal() {
    setOpen(true);
  }

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    handleFetch("", "alljobs").then((res) => {
      console.log(res);
      setData(res);
      setLoading(false);
    });
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },

    {
      field: "profile",
      headerName: "Profile ",
      width: 100,
      sortable: false,
      renderCell: () => {
        return (
          <>
            <button
              className={styles.viewStudentProfile__button}
              onClick={() => {
                openStudentProfileModal();
              }}
            >
              View Profile
            </button>
          </>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <>
      <CustomTitle title="Commission Dashboard" />
      <ViewStudentProfileModal open={open} handleClose={handleClose} />
      <div className={styles.studentDashboard}>
        <div className={styles.filter__container}></div>
        <div className={styles.studentDashboard__content}>
          <div className={styles.jobDescription__container}>
            <div className={styles.jobDescription__container_header}>
              List of Applicants
            </div>
            <div className={styles.jobDescription__container_inner}>
              <div>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                />
              </div>
            </div>
          </div>
          <div className={styles.jobCards__container}>
            <div className={styles.jobDescription__container_header}>
              Available Jobs
            </div>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <ClipLoader color="#00487c" loading={loading} size={50} />
              </div>
            ) : data.length > 0 ? (
              <div className={styles.jobCards__container_1}>
                {data.map((job) => (
                  <NewJobCard job={job} />
                ))}
              </div>
            ) : (
              <div
                className={styles.jobDescription__container_header}
                style={{
                  color: "#00487c",
                }}
              >
                No Jobs Available
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommissionDashboard;
