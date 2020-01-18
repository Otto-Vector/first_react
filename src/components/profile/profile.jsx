import React from 'react';

const Profile = () => {
  return (
    <div className = "content">
        <div className = "for_image"><img src="https://wallbox.ru/wallpapers/main/201419/ffc936b81388e67.jpg" alt = "" /></div>

        <div className = "person">
          <div className = "avatar" >avatar</div>
          <div className = "about" >some information about</div>
        </div>

        <div className = "post_input">
          <form>
          <label>My posts
            <input type = "text" placeholder = "input text here" />
          </label>
            <div>
            <button> Send </button>
            </div>
          </form>
        </div>
        <div className = "post_new" > Some text about new post</div>
        <div className = "post_new" > Some text about new post 22</div>
        <div className = "post_new" > Some text about new post 33</div>
        <div className = "post_new" > Some text about new post 44</div>
    </div>
  )
}
export default Profile;