import React from "react";
import CustomTitle from "@/utils/customTitle";
import { districts } from "@/configs";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import userContext from "@/contexts/userContext";
import { handleFetch, handlePut } from "@/utils/requests";
import ViewStudentProfileModal from "@/components/ViewStudentProfileModal/ViewStudentProfileModal";
import { ClipLoader } from "react-spinners";

function SchoolStudentsList() {
  const { userData, user } = React.useContext(userContext);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }

  function openStudentProfileModal() {
    setOpen(true);
  }

  const handleVerfy = async (row) => {
    let res = await handlePut(user.accessToken, `admin/student`, row);
    let prev = [...data];
    console.log(prev, row.id);
    prev[row.id] = { id: row.id, ...res };
    console.log(prev);
    setData(prev);
  };
  React.useEffect(() => {
    if (user) {
      setLoading(true);
      handleFetch(user.accessToken, "admin/students").then((res) => {
        console.log(res);
        res = res.map((item, index) => {
          return { id: index + 1, ...item };
        });
        console.log(res);
        setData(res);
        setLoading(false);
      });
    }
  }, [userData, user]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",

      width: 300,
    },
    {
      field: "phone",
      headerName: "Phone No.",
      width: 160,
    },
    {
      field: "school",
      headerName: "School",
      width: 200,
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

  return (
    <>
      <CustomTitle title="School Students" />
      <ViewStudentProfileModal open={open} handleClose={handleClose} />
      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>STUDENTS</div>
        <div className={styles.jobDescription__container_inner}>
          {loading ? (
            <div
              style={{
                textAlign: "center",
              }}
            >
              <ClipLoader color="#00487c" loading={loading} size={50} />
            </div>
          ) : (
            <div>
              {data.length === 0 ? (
                <div
                  className={styles.registration__heading}
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Students Found
                </div>
              ) : (
                <DataGrid
                  rows={data}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SchoolStudentsList;
