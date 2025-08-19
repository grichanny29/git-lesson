



import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { useForm } from 'react-hook-form';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange" // валидация при каждом вводе
  });

  const onAddPost = (data) => {
    props.addPost(data.newPostText);
    reset();
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <form onSubmit={handleSubmit(onAddPost)}>
        <div>
          <textarea
            {...register("newPostText", {
              required: "Поле обязательно для заполнения",
              maxLength: {
                value: 10,
                message: "Максимальная длина поста — 200 символов"
              },
              minLength: {
                value: 5,
                message: "Минимальная длина поста — 5 символов"
              }
            })}
            placeholder="Enter your post"
            className={`${s.textarea} ${errors.newPostText ? s.errorBorder : ''}`}
          />
          {errors.newPostText && (
            <p className={s.error}>{errors.newPostText.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className={s.addButton}
            disabled={!isValid}
          >
            Add post
          </button>
        </div>
      </form>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;