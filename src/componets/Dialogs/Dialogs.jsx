



import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  const messagesElements = state.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const addNewMessage = (data) => {
    props.sendMessage(data.newMessageBody);
    reset();
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <form onSubmit={handleSubmit(addNewMessage)}>
          <div>
            <textarea
              {...register("newMessageBody", {
                required: "Поле обязательно для заполнения",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа"
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 500 символов"
                }
              })}
              placeholder="Enter your message"
              className={`${s.textarea} ${errors.newMessageBody ? s.errorBorder : ''}`}
            />
            {errors.newMessageBody && (
              <p className={s.error}>{errors.newMessageBody.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={s.sendButton}
              disabled={!isValid}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;