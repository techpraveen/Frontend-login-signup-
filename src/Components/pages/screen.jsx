import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
const Screen = ()=>{
    return(
        <div>
             <div class="dashboard">
  <div class="conversation active">
    <div class="conversation-header">
      <div class="contact">
        <div class="contact-name">Amit RG</div>
        <div class="contact-status">
          <div class="status-dot online"></div>
          Online
        </div>
      </div>
      <div class="actions">
        <button class="action-button">Message</button>
        <button class="action-button">Call</button>
      </div>
    </div>
    <div class="conversation-content">
      <div class="message you-message">
        <div class="message-text">Hey There! I probably did one of the best...</div>
      </div>
      <div class="message other-message">
        <div class="message-text">Hi do you have any T-Shirt available in store? Is it in stock right now?</div>
      </div>
      <div class="message you-message">
        <div class="message-text">We've 3 left in stock! If you order before 8PM we can ship it today.</div>
      </div>
    </div>
  </div>
  <div class="conversation">
    <div class="conversation-header">
      <div class="contact">
        <div class="contact-name">Richard Panel</div>
        <div class="contact-status">
          <div class="status-dot offline"></div>
          Offline
        </div>
      </div>
      <div class="actions">
        <button class="action-button">Email</button>
      </div>
    </div>
  </div>
</div>
            
           
            
           
        </div>
    )

}
export default Screen