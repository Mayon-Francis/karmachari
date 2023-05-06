import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "src/utils/firebase";
import { handleLogin } from "src/utils/requests";
import { useRouter } from "next/router";

import { createContext } from "react";

const UserContext = createContext();

export function UserProvider(props) {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, userLoading, userError] = useAuthState(auth);
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true)
  console.log(userData);
  useEffect(() => {
    if(!userLoading && !user)
      setLoading(false)
    if (user) {
        console.log("hello", user)
        console.log(router.pathname.split('/'))
      if (!userData?.email && localStorage.getItem("role")) {
        handleLogin(
          user.accessToken,
          localStorage.getItem("role")).then((data) => {
            if (!data.email) {
            }
            console.log(data);
            setUserData({...data, roLe:localStorage.getItem("role")});
            setLoading(false)
          }).catch((err) => {
            console.log(err);
            })

        
      }
    }
  }, [user, userLoading,router]);

  const logout = () => {
    signOut(auth);
    setUserData("");
    localStorage.removeItem("role");
  };
  return (
    <UserContext.Provider
      value={{ user, userLoading, userError, logout, userData, setUserData }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
