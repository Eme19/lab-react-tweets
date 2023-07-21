import ProfileImage from "./ProfileImage.js" 
import User from './User.js';
import Timestamp from  './Timestamp.js';
import Message from './Message.js'

function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
        <User name={props.tweet.user.name}/>
        <User handle={props.tweet.user.handle}/>
       <Timestamp timestamp={props.tweet.timestamp}/>
        </div>
      <p className="message"> 
      <Message message={props.tweet.message} />
      </p>
      
        
        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
