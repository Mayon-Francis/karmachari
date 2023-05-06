import { useContext, useEffect } from "react";
import UserContext from "@/contexts/userContext";
import { useRouter } from "next/router";
import Loader from "@/components/Loader/Loader";

export default function profile(props) {
  const router = useRouter();
  const { user, userLoading, loading,userData,userError, logout } = useContext(UserContext);
 useEffect(() => {
  if(router && userData && router.pathname.split("/")[1] != userData?.roLe){
    router.push("/"+userData?.roLe+"/dashboard");
  }
  else if (router &&
    (["/", "/student", "/admin", "/commission", "/school", "/company"].includes(
      router.pathname
    ) || router.pathname.split("/").includes("register")));
  else if (router && !loading && !userLoading && !userData && !user) {
    router.push("/");
  }
 console.log(router, userData, loading , userLoading, user);
  }, [router, userLoading,userData]);

  
  function Content() {
    if(!userData)
      return <Loader />
    return (
      props.children
    );
  }
  if (router &&
    (["/", "/student", "/admin", "/commission", "/school", "/company"].includes(
      router.pathname
    ) || router.pathname.split("/").includes("register"))
  )
    return props.children;
  return <Content />;
}
