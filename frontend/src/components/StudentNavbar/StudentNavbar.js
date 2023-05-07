import React, { useEffect, useContext } from "react";
import styles from "./StudentNavbar.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { Avatar, Drawer } from "@mui/material";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
import navlogo from "../../assets/images/svg/navlogo.svg";
import Image from "next/image";
import userContext from "src/contexts/userContext";

function StudentNavbar() {
  const { userData, logout } = useContext(userContext);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    if (router.pathname.includes("/admin")) {
      router.push("/admin");
    } else if (router.pathname.includes("/commission")) {
      router.push("/commission");
    } else if (router.pathname.includes("/company")) {
      router.push("/company");
    } else if (router.pathname.includes("/school")) {
      router.push("/school");
    } else if (router.pathname.includes("/student")) {
      router.push("/student");
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div
            className={styles.logo_container}
            onClick={() => {
              router.push("/");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Image src={navlogo} alt="" />
          </div>
          <div
            className={styles.heading}
            onClick={() => {
              router.push("/");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            KARMACHARI
          </div>
        </div>

        {/* {userData &&
          (router.pathname.includes("admin") ||
            router.pathname.includes("commission") ||
            router.pathname.includes("company") ||
            router.pathname.includes("school") ||
            router.pathname.includes("student")) && (
            <div className={styles.navbar__search}>
              <input type="text" placeholder="Search" />
              <div className={styles.navbar__search_button}>Search</div>
            </div>
          )} */}

        {router.pathname.includes("admin") ||
        router.pathname.includes("commission") ||
        router.pathname.includes("company") ||
        router.pathname.includes("school") ||
        router.pathname.includes("student") ? (
          userData ? (
            <Menu
              menuButton={
                <Avatar
                  sx={{
                    cursor: "pointer",
                    height: "40px",
                    width: "40px",
                    backgroundColor: "#c9e9ff",
                    color: "#00487c",
                  }}
                >
                  {userData?.name.charAt(0)}
                </Avatar>
              }
              transition
            >
              {router.pathname.includes("/student")? <></>:
              <MenuItem
                onClick={() => {
                  if (router.pathname.includes("/admin")) {
                    router.push("/admin/dashboard");
                  } else if (router.pathname.includes("/commission")) {
                    router.push("/commission/dashboard");
                  } else if (router.pathname.includes("/company")) {
                    router.push("/company/dashboard");
                  } else if (router.pathname.includes("/school")) {
                    router.push("/school/dashboard");
                  } 
                }}
                style={{
                  color: "#00487c",
                }}
              >
                Dashboard
              </MenuItem>}
              {router.pathname.includes("/school/") ||
              router.pathname.includes("/admin") ? (
                <MenuItem
                  onClick={() => {
                    if (router.pathname.includes("/admin")) {
                      router.push("/admin/dashboard/students");
                    } else if (router.pathname.includes("/school")) {
                      router.push("/school/dashboard/students");
                    }
                  }}
                  style={{
                    color: "#00487c",
                  }}
                >
                  View Students
                </MenuItem>
              ) : (
                ""
              )}
              {router.pathname.includes("/commission") ||
              router.pathname.includes("/admin") ? (
                <MenuItem
                  onClick={() => {
                    if (router.pathname.includes("/admin")) {
                      router.push("/admin/dashboard/schools");
                    } else if (router.pathname.includes("/commission")) {
                      router.push("/commission/dashboard/schools");
                    }
                  }}
                  style={{
                    color: "#00487c",
                  }}
                >
                  View Schools/Colleges
                </MenuItem>
              ) : (
                ""
              )}
              {router.pathname.includes("/commission") ||
              router.pathname.includes("/admin") ? (
                <>
                  <MenuItem
                    onClick={() => {
                      if (router.pathname.includes("/admin")) {
                        router.push("/admin/dashboard/companies");
                      } else if (router.pathname.includes("/commission")) {
                        router.push("/commission/dashboard/companies");
                      }
                    }}
                    style={{
                      color: "#00487c",
                    }}
                  >
                    View Employers
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      if (router.pathname.includes("/admin")) {
                        router.push("/admin/dashboard/grievances");
                      } else if (router.pathname.includes("/commission")) {
                        router.push("/commission/dashboard/grievances");
                      }
                    }}
                    style={{
                      color: "#00487c",
                    }}
                  >
                    View Grievances
                  </MenuItem>
                </>
              ) : (
                ""
              )}
              {router.pathname.includes("/admin") ? (
                <MenuItem
                  onClick={() => {
                    if (router.pathname.includes("/admin")) {
                      router.push("/admin/dashboard/commissioners");
                    }
                  }}
                  style={{
                    color: "#00487c",
                  }}
                >
                  View Officials
                </MenuItem>
              ) : (
                ""
              )}
              {router.pathname.includes("admin") && (
                <>
                  <MenuItem
                    onClick={() => {
                      router.push("/admin/dashboard/inquiries");
                    }}
                    style={{
                      color: "#00487c",
                    }}
                  >
                    View Inquiries
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      router.push("/admin/dashboard/statistics");
                    }}
                    style={{
                      color: "#00487c",
                    }}
                  >
                    Statistics
                  </MenuItem>
                </>
              )}

              <MenuItem
                onClick={() => {
                  if (router.pathname.includes("/admin")) {
                    router.push("/admin/profile");
                  } else if (router.pathname.includes("/commission")) {
                    router.push("/commission/profile");
                  } else if (router.pathname.includes("/company")) {
                    router.push("/company/profile");
                  } else if (router.pathname.includes("/school")) {
                    router.push("/school/profile");
                  } else if (router.pathname.includes("/student")) {
                    router.push("/student/dashboard");
                  }
                }}
                style={{
                  color: "#00487c",
                }}
              >
                {" "}
                My Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLogout();
                }}
                style={{
                  color: "#00487c",
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          ) : (
            <div className={styles.buttons}>
              <div
                className={styles.register_btn}
                onClick={() => {
                  if (router.pathname.includes("/admin")) {
                    router.push("/admin/register");
                  } else if (router.pathname.includes("/commission")) {
                    router.push("/commission/register");
                  } else if (router.pathname.includes("/company")) {
                    router.push("/company/register");
                  } else if (router.pathname.includes("/school")) {
                    router.push("/school/register");
                  } else if (router.pathname.includes("/student")) {
                    router.push("/student/register");
                  }
                }}
              >
                {" "}
                Register
              </div>
              <div
                className={styles.login_btn}
                onClick={() => {
                  if (router.pathname.includes("/admin")) {
                    router.push("/admin");
                  } else if (router.pathname.includes("/commission")) {
                    router.push("/commission");
                  } else if (router.pathname.includes("/company")) {
                    router.push("/company");
                  } else if (router.pathname.includes("/school")) {
                    router.push("/school");
                  } else if (router.pathname.includes("/student")) {
                    router.push("/student");
                  }
                }}
              >
                Login
              </div>
            </div>
          )
        ) : (
          <div
            className={styles.buttons}
            style={{
              gap: "2rem",
            }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.navbar_link_item}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.navbar_link_item}
            >
              About Us
            </Link>
            <Link
              to="updates"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.navbar_link_item}
            >
              Updates
            </Link>
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className={styles.navbar_link_item}
            >
              FAQ
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className={styles.navbar_link_item}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
      <div className={styles.navbar__mob}>
        <div className={styles.logo_container}>
          <Image src={navlogo} alt="" />
        </div>
        <div className={styles.heading}>KARMACHARI</div>
        <div
          className={styles.navbar__menu_container}
          onClick={() => {
            setOpen(true);
          }}
        >
          <HiMenuAlt2
            className={styles.navbar__menu}
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>

      <Drawer
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className={styles.nav__drawer}>
          <div className={styles.navbar__drawer_header}>
            <div className={styles.heading}>KARMACHARI</div>

            <div className={styles.navbar__items_mob}>
              <div className={styles.navbar__links_1}>
                {router.pathname.includes("admin") ||
                router.pathname.includes("commission") ||
                router.pathname.includes("company") ||
                router.pathname.includes("school") ||
                router.pathname.includes("student") ? (
                  userData ? (
                    <>
                      <Avatar
                        sx={{
                          cursor: "pointer",
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        {userData.name.charAt(0)}
                      </Avatar>
                      <div
                        onClick={() => {
                          if (router.pathname.includes("/admin")) {
                            router.push("/admin/dashboard");
                          } else if (router.pathname.includes("/commission")) {
                            router.push("/commission/dashboard");
                          } else if (router.pathname.includes("/company")) {
                            router.push("/company/dashboard");
                          } else if (router.pathname.includes("/school")) {
                            router.push("/school/dashboard");
                          } else if (router.pathname.includes("/student")) {
                            router.push("/student/dashboard");
                          }
                          handleDrawerClose();
                        }}
                        className={styles.navbar_link}
                      >
                        Dashboard
                      </div>
                      {router.pathname.includes("/school/") ||
                      router.pathname.includes("/admin") ? (
                        <div
                          onClick={() => {
                            if (router.pathname.includes("/admin")) {
                              router.push("/admin/dashboard/students");
                            } else if (router.pathname.includes("/school")) {
                              router.push("/school/dashboard/students");
                            }
                            handleDrawerClose();
                          }}
                          className={styles.navbar_link}
                        >
                          View Students
                        </div>
                      ) : (
                        ""
                      )}
                      {router.pathname.includes("/commission") ||
                      router.pathname.includes("/admin") ? (
                        <div
                          onClick={() => {
                            if (router.pathname.includes("/admin")) {
                              router.push("/admin/dashboard/schools");
                            } else if (
                              router.pathname.includes("/commission")
                            ) {
                              router.push("/commission/dashboard/schools");
                            }
                            handleDrawerClose();
                          }}
                          className={styles.navbar_link}
                        >
                          View Schools/Colleges
                        </div>
                      ) : (
                        ""
                      )}
                      {router.pathname.includes("/commission") ||
                      router.pathname.includes("/admin") ? (
                        <>
                          <div
                            onClick={() => {
                              if (router.pathname.includes("/admin")) {
                                router.push("/admin/dashboard/companies");
                              } else if (
                                router.pathname.includes("/commission")
                              ) {
                                router.push("/commission/dashboard/companies");
                              }
                              handleDrawerClose();
                            }}
                            className={styles.navbar_link}
                          >
                            View Employers
                          </div>
                          <div
                            onClick={() => {
                              if (router.pathname.includes("/admin")) {
                                router.push("/admin/dashboard/grievances");
                              } else if (
                                router.pathname.includes("/commission")
                              ) {
                                router.push("/commission/dashboard/grievances");
                              }
                              handleDrawerClose();
                            }}
                            className={styles.navbar_link}
                          >
                            View Grievances
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {router.pathname.includes("/admin") ? (
                        <>
                          <div
                            onClick={() => {
                              router.push("/admin/dashboard/inquiries");
                              handleDrawerClose();
                            }}
                            style={{
                              color: "#00487c",
                            }}
                          >
                            View Inquiries
                          </div>
                          <div
                            onClick={() => {
                              router.push("/admin/dashboard/statistics");
                              handleDrawerClose();
                            }}
                            style={{
                              color: "#00487c",
                            }}
                          >
                            Statistics
                          </div>
                          <div
                            onClick={() => {
                              router.push("/admin/dashboard/commissioners");
                              handleDrawerClose();
                            }}
                            className={styles.navbar_link}
                          >
                            View Official
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <div
                        onClick={() => {
                          if (router.pathname.includes("/admin")) {
                            router.push("/admin/profile");
                          } else if (router.pathname.includes("/commission")) {
                            router.push("/commission/profile");
                          } else if (router.pathname.includes("/company")) {
                            router.push("/company/profile");
                          } else if (router.pathname.includes("/school")) {
                            router.push("/school/profile");
                          } else if (router.pathname.includes("/student")) {
                            router.push("/student/profile");
                          }
                          handleDrawerClose();
                        }}
                        className={styles.navbar_link}
                      >
                        My Profile
                      </div>
                      <div
                        onClick={() => {
                          handleLogout();
                          handleDrawerClose();
                        }}
                        className={styles.register_btn}
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={styles.register_btn}
                        onClick={() => {
                          if (router.pathname.includes("/admin")) {
                            router.push("/admin/register");
                          } else if (router.pathname.includes("/commission")) {
                            router.push("/commission/register");
                          } else if (router.pathname.includes("/company")) {
                            router.push("/company/register");
                          } else if (router.pathname.includes("/school")) {
                            router.push("/school/register");
                          } else if (router.pathname.includes("/student")) {
                            router.push("/student/register");
                          }
                          handleDrawerClose();
                        }}
                      >
                        {" "}
                        Register
                      </div>
                      <div
                        className={styles.login_btn}
                        onClick={() => {
                          if (router.pathname.includes("/admin")) {
                            router.push("/admin");
                          } else if (router.pathname.includes("/commission")) {
                            router.push("/commission");
                          } else if (router.pathname.includes("/company")) {
                            router.push("/company");
                          } else if (router.pathname.includes("/school")) {
                            router.push("/school");
                          } else if (router.pathname.includes("/student")) {
                            router.push("/student");
                          }
                          handleDrawerClose();
                        }}
                      >
                        Login
                      </div>
                    </>
                  )
                ) : (
                  <div
                    className={styles.buttons}
                    style={{
                      gap: "2rem",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className={styles.navbar_link_item}
                      onClick={() => {
                        handleDrawerClose();
                      }}
                    >
                      Home
                    </Link>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className={styles.navbar_link_item}
                      onClick={() => {
                        handleDrawerClose();
                      }}
                    >
                      About Us
                    </Link>
                    <Link
                      to="updates"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className={styles.navbar_link_item}
                      onClick={() => {
                        handleDrawerClose();
                      }}
                    >
                      Updates
                    </Link>
                    <Link
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className={styles.navbar_link_item}
                      onClick={() => {
                        handleDrawerClose();
                      }}
                    >
                      FAQ
                    </Link>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className={styles.navbar_link_item}
                      onClick={() => {
                        handleDrawerClose();
                      }}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default StudentNavbar;
