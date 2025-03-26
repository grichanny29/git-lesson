import React from "react";
import styles from './Users.module.css';
 
let Users = (props) => {
 if (props.users.length === 0) {
	props.setUsers ( [
		{id: 1, photoUrl:'https://sun1-98.userapi.com/s/v1/ig2/dX79rPP3toVn-Uv8xkE84nVM_7xO1JZLlaCZyeFI_1oVPLBp3DSufotiU_h7LGry17OqfHR58IvEq6yBoJcuUnli.jpg?quality=96&blur=50,20&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920&from=bu&u=Gp68Gryzxju0kOlRtNBwrCUZuTTY_thPNSoH_qkuvnc&cs=810x1080', followed: false, fullName: 'Dmitry', status:'i am boss',location:{city:'Kishinev',country:'Moldova'}},
		{id: 2, photoUrl:'https://sun1-98.userapi.com/s/v1/ig2/dX79rPP3toVn-Uv8xkE84nVM_7xO1JZLlaCZyeFI_1oVPLBp3DSufotiU_h7LGry17OqfHR58IvEq6yBoJcuUnli.jpg?quality=96&blur=50,20&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920&from=bu&u=Gp68Gryzxju0kOlRtNBwrCUZuTTY_thPNSoH_qkuvnc&cs=810x1080', followed: true, fullName: 'Sasha too', status:'i am boss',location:{city:'Moscov',country:'Russia'}},
		{id: 3, photoUrl:'https://sun1-98.userapi.com/s/v1/ig2/dX79rPP3toVn-Uv8xkE84nVM_7xO1JZLlaCZyeFI_1oVPLBp3DSufotiU_h7LGry17OqfHR58IvEq6yBoJcuUnli.jpg?quality=96&blur=50,20&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920&from=bu&u=Gp68Gryzxju0kOlRtNBwrCUZuTTY_thPNSoH_qkuvnc&cs=810x1080', followed: false, fullName: 'Andrew', status:'i am boss',location:{city:'Kiev',country:'Ukrain'}}
   ] 
   )
 }

return <div>
    {
			props.users.map ( u => <div key={u.id}>
           <span>
						<div>
							  <img src={u.photoUrl} className={styles.userphoto} />
						</div>
						<div>
							{u.followed
								? <button onClick= {() => {props.unfollow(u.id) } } >Unfollow</button> 
								: <button onClick={() => {props.follow(u.id)}} >Follow</button> } 
						</div>
					 </span>
					 <span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					 </span>
			</div>)
		}
</div>
}





export default Users;