import React, { useEffect, useContext } from "react";
import CustomTitle from "@/utils/customTitle";
import { districts } from "@/configs";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import userContext from "@/contexts/userContext";
import { handleFetch, handlePut } from "@/utils/requests";
import ViewSchoolProfileModal from "@/components/ViewSchoolProfileModal/ViewSchoolProfileModal";
import { ClipLoader } from "react-spinners";

function Statistics() {
  const { userData, user } = useContext(userContext);
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleVerfy = async (row) => {
    let res = await handlePut(user.accessToken, `admin/school`, row);
    let prev = [...data];
    console.log(prev, row.id);
    prev[row.id] = { id: row.id, ...res };
    console.log(prev);
    setData(prev);
  };
  useEffect(() => {
    if (user) {
      setLoading(true);
      handleFetch(user.accessToken, "admin/school?verified=all").then((res) => {
        res = res.map((item, index) => {
          return { id: index + 1, ...item };
        });
        console.log(res);
        setData(res);
        setLoading(false);

        console.log(res);
      });
    }
  }, [userData, user]);

  function handleClose() {
    setOpen(false);
  }

  function openSchoolProfileModal() {
    setOpen(true);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
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
      field: "profile",
      headerName: "Profile ",
      width: 150,
      sortable: false,
      renderCell: () => {
        return (
          <>
            <button
              className={styles.viewStudentProfile__button}
              onClick={() => {
                openSchoolProfileModal();
              }}
            >
              View Profile
            </button>
          </>
        );
      },
    },
    {
      field: "verified",
      headerName: "Status",
      width: "100",
      renderCell: (props) => {
        if (props?.row.verified) {
          return (
            <div disabled className={styles.registration__button__verified}>
              Verified
            </div>
          );
        } else {
          return (
            <button
              className={styles.registration__button}
              onClick={() => {
                handleVerfy(props.row);
              }}
            >
              Verify
            </button>
          );
        }
      },
    },
  ];
  return (
    <>
      <CustomTitle title="Schools" />
      <ViewSchoolProfileModal open={open} handleClose={handleClose} />

      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>Statistics</div>
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
                  No Schools Found
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

export default Statistics;