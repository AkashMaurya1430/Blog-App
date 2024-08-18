import { Asterisk } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";
import ProfileImageDropZone from "./profile_image_dropzone";
import { userLogin, userRegister } from "@/services/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "@/slices/authslice/authslice";
import { redirect } from "react-router-dom";

const Input = ({ label, type, id, placeholder, name, value, onChange, className = "", required, errMessage }) => {
  return (
    <div className="mb-4 text-left">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1 ">
        {label}
        {required ? (
          <>
            <Asterisk size={10} className="inline relative -top-1" />
          </>
        ) : (
          ""
        )}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-2 py-2 border ${
          errMessage?.length ? "border-red-500" : "border-gray-300"
        } rounded shadow-sm outline-none  focus:border-gray-700 ${className} transition-all ease-in-out duration-900`}
      />
      {errMessage?.length ? <small className=" text-red-500 text-[0.7rem] ">{errMessage}</small> : <></>}
    </div>
  );
};

const SignUp = ({ formType }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  const [errors, setErrors] = useState({});

  const signUpFormValidationSchema = Yup.object({
    username: Yup.string().required("Username cannot be empty"),
    email: Yup.string().required("Email cannot be empty").email("Please enter a valid email"),
    password: Yup.string()
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .min(8, "Password must be atleast 8 characters")
      .required("Password cannot be empty"),
  });

  const loginFormValidationSchema = Yup.object({
    // username: Yup.string().required("Username cannot be empty"),
    email: Yup.string().required("Email cannot be empty").email("Please enter a valid email"),
    password: Yup.string()
      // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      // .matches(/\d/, "Password must contain at least one number")
      // .min(8, "Password must be atleast 8 characters")
      .required("Password cannot be empty"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formType == "sign_up") {
        await signUpFormValidationSchema.validate(formData, { abortEarly: false });
      } else {
        await loginFormValidationSchema.validate(formData, { abortEarly: false });
      }
      console.log("Form Submitted", formData);
      setErrors({});

      formType == "sign_up" ? registerUser() : loginUser();
    } catch (err) {
      const newError = {};
      err.inner.forEach((errLog) => {
        newError[errLog.path] = errLog.message;
      });

      setErrors(newError);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    await userRegister(formData)
      .then((res) => {
        console.log("res: ", res);
        toast.success("User Registered");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const loginUser = async () => {
    // console.log("loginUser: ", loginUser);
    await userLogin(formData)
      .then((res) => {
        // console.log("res: ", res);
        toast.success("User Logged in successfully");
        dispatch(login(res.data));
        redirect("/home");
      })
      .catch((err) => {
        // console.log("err: ", err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="flex items-center justify-center px-5 py-10 bg-light-50  h-screen">
      <form className="max-w-md mx-auto mt-8 p-6 bg-light-0 rounded w-full gap-4 shadow-md" onSubmit={handleSubmit} noValidate>
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-50">{formType === "sign_up" ? "Sign Up" : "Sign In"}</h2>
        {formType === "sign_up" && <ProfileImageDropZone profileImage={profileImage} setProfileImage={setProfileImage} />}

        {formType === "sign_up" && (
          <Input
            className="text-sm"
            label="Username"
            name="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={handleChange}
            value={formData.username ? formData.username : ""}
            errMessage={errors.username}
            required
          />
        )}
        <Input
          className="text-sm"
          label="Email"
          name="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email ? formData.email : ""}
          errMessage={errors.email}
          required
        />
        <Input
          className="text-sm"
          label="Password"
          name="password"
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formData.password ? formData.password : ""}
          errMessage={errors.password}
          required
        />
        <button
          type="submit"
          className="mt-4 w-full bg-dark-75 py-2 px-4 rounded-2xl  text-sm font-semibold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          {formType === "sign_up" ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
