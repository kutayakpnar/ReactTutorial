
import PropTypes from "prop-types";

function User({name,surname,isLoggedin,friends,address}){
    
    return (<div>
    <h1>
        {
        isLoggedin ? `Selam ${name}` : "Giriş başarısız."
       }  
    </h1>
       {address.title} {address.country}
       <br/>
       <br/>
       {
       friends.map((friend,index)=> (<div key={index}>{friend} </div>) )
       }

    </div>
    )
}
User.propTypes={
    name:PropTypes.string.isRequired,
    surname:PropTypes.string,
    isLoggedin:PropTypes.bool.isRequired,
    friens:PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number
    ]),
    address:PropTypes.shape({
        title:PropTypes.string,
        country:PropTypes.string
    })
}
User.defaultProps={
    isLoggedin:false

}
export default User;
