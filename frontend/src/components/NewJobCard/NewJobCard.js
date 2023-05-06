import React from "react";
import styles from "./NewJobCard.module.css";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/router";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import EditJobModal from "../EditJobModal/EditJobModal";

function NewJobCard({openEdit, job}) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.newJobCard}>
        <div className={styles.newJobCard__image}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU"
            alt=""
          />
        </div>
        <div className={styles.newJobCard__info}>
          <div className={styles.newJobCard__info__title}>{job?.role}</div>
          <div className={styles.newJobCard__info__company}>{job?.company_name}</div>
          <div className={styles.newJobCard__info__location}>
            {job?.location}
          </div>
        </div>
        {router.pathname.includes("commission") ||
        router.pathname.includes("company") ||
        router.pathname.includes("admin") ? (
          <>
            <RiDeleteBin7Line
              className={styles.newJobCard__bookmark}
              onClick={() => {
                setOpen(true);
              }}
            />
            {router.pathname.includes("company") && (
              <FaRegEdit className={styles.newJobCard__bookmark} onClick={()=>{openEdit()}} />
            )}
          </>
        ) : (
          <>
            <FiBookmark className={styles.newJobCard__bookmark} />
          </>
        )}
      </div>
      <DeleteConfirmationModal open={open} handleClose={handleClose} />
    </>
  );
}

export default NewJobCard;
