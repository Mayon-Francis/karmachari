import axios from "axios";
import toast from "react-hot-toast";

const backendURL = process.env.NEXT_PUBLIC_API;

const handleLogin = async (authToken, role) => {
  try {
    const res = await axios.get(`${backendURL}/${role}/login`, {
      headers: { "x-auth-token": `${authToken}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
};

const handleRegister = async (body, userType) => {
  try {
    const res = await axios.post(`${backendURL}/${userType}/register`, body);
    toast.success("Registration Successful");
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
};

const handlePost = async (authToken, body, url) => {
  try {
    const res = await axios.post(`${backendURL}/${url}`, body, {
      headers: { "x-auth-token": `${authToken}` },
    });
    toast.success("rregistration successful");
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
};


const handleFetch = async (authToken, url) => {
  try {
    const res = await axios.get(`${backendURL}/${url}`, {
      headers: { "x-auth-token": `${authToken}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
};

const handlePut = async (authToken, url, body) => {
  try {
    const res = await axios.put(`${backendURL}/${url}`, body, {
      headers: { "x-auth-token": `${authToken}` },
    });
    toast.success(res.data.message);
    return res.data.data;
  } catch (err) {
    toast.error("something went wrong");
    throw new Error(err);                                            
  }
};


const getSchools = async ()=>{
  try{
    const res = await axios.get(`${backendURL}/schools`);
    return res.data;
  }catch(err){
    console.log(err);
    toast.error(err.response.data.message);
  }
}
export { handleLogin, handleRegister, handleFetch, handlePut, handlePost, getSchools };
