import React from "react";
import "./TextField.css";
export const EmailTextField = ({ onChange, register, errors }) => {
  return (
    <div className="textfield">
      <h3> Email </h3>
      <input
        {...register("Email", {
          required: "Email is required.",
          pattern: {
            value:
            /([a-zA-Z0-9]+)([_.\-{1}])?([a-zA-Z0-9]+)@([a-zA-Z0-9]+)([.])([a-zA-Z.]+)/g,
            message: "This is not a valid email",
          },
        })}
        onChange={onChange}
        className="rounded-input"
        type="text"
      />
      {errors.Email && <p className="error">{errors.Email.message}</p>}
    </div>
  );
};

export const PasswordTextField = ({ onChange, register, errors }) => {
  return (
    <div className="textfield">
      <h3> Password </h3>
      <input
        {...register("Password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should have more than 8 characters",
          },
        })}
        onChange={onChange}
        className="rounded-input"
        type="password"
      />
      {errors.Password && <p className="error">{errors.Password.message}</p>}
    </div>
  );
};

export const NameTextField = ({ onChange, register, errors }) => {
  return (
    <div className="textfield">
      <h3> Name </h3>
      <input
        {...register("Name", {
          required: "Name is required",
        })}
        onChange={onChange}
        className="rounded-input"
        type="text"
      />
      {errors.Name && <p className="error">{errors.Name.message}</p>}
    </div>
  );
};

