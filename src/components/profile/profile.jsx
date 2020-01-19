import React from 'react';
import clazz from './profile.module.scss';

const Profile = () => {
  return (
    <div className = {clazz.profile}>
        <div className = {clazz.for_image}><img src="https://wallbox.ru/wallpapers/main/201419/ffc936b81388e67.jpg" alt = "" /></div>

        <div className = {clazz.person}>
          <div className = {clazz.avatar} >avatar</div>
          <div className = {clazz.about} >some information about</div>
        </div>

        <div className = {clazz.post_input}>
          <form>
          <label>My posts
            <input type = "text" placeholder = "input text here" />
          </label>
            <div>
            <button> Send </button>
            </div>
          </form>
        </div>
        <div className = {clazz.post_new} > Some text about new post</div>
        <div className = {clazz.post_new} > Some text about new post 22</div>
        <div className = {clazz.post_new} > Some text about new post 33</div>
        <div className = {clazz.post_new} > Some text about new post 44</div>
    </div>
  )
}
export default Profile;