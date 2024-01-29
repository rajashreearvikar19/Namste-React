import React from "react";

class Userclass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInfo:{
        name:"dummy-name",
        location:"deafult",
        avatar_url:"https://dummy"
      }
    }
  }
   
  async componentDidMount(){
   const data= await fetch("https://api.github.com/users/rajashreearvikar19");
   const json= await data.json();
   this.setState(json);
   console.log(json);
  }


      render(){ 
        const{name,location,avatar_url}=this.state.userInfo;
        return(
          <div className="UserInfo">
            <h1>Name:{name}</h1>
            <h1>Location: {location}</h1>
            <img src={avatar_url} />
          </div>  
        )
    }
}

export default Userclass;