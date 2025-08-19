

import React from "react";
import { useForm } from "react-hook-form";
import s from './Login.module.css';
import { connect } from "react-redux";
import { login } from "../redux/auth-reduser";
import { Navigate } from "react-router-dom";

const Login = ({ login, isAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    mode: "onChange" // ошибки и подсветка сразу при вводе
  });

  const onSubmit = async (formData) => {
    const success = await login(
      formData.email,
      formData.password,
      formData.rememberMe
    );

    if (!success) {
      setError("email", { type: "manual", message: "Неверный email или пароль" });
      setError("password", { type: "manual", message: "Неверный email или пароль" });
    }
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={s.loginContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${s.inputWrapper} ${errors.email ? s.errorBorder : ''}`}>
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
          {errors.email && <span className={s.errorText}>{errors.email.message}</span>}
        </div>

        <div className={`${s.inputWrapper} ${errors.password ? s.errorBorder : ''}`}>
          <input
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            type="password"
          />
          {errors.password && <span className={s.errorText}>{errors.password.message}</span>}
        </div>

        <div className={s.checkboxWrapper}>
          <input type="checkbox" {...register("rememberMe")} />
          <label>Remember me</label>
        </div>

        <button
          type="submit"
          className={s.loginButton}
          disabled={Object.keys(errors).length > 0} // блокируем при ошибках
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);