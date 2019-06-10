import React from "react";
import { ItemImg } from "../style";
import {connect} from "react-redux";

class VipItem extends React.Component {
  render() {
    const {recommentList} = this.props;
    return (
      <div>
          {
              recommentList.map((item)=>{
                    return (
                        <a href="/" key={item.get('id')}>
                            <ItemImg
                                src={item.get("imgUrl")}
                                alt="Banner s club"
                            /> 
                        </a>
                    )
              })
          }
        
    </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        recommentList:state.get('home').get('recommentList')
    }
}

export default connect(mapStateToProps,null)(VipItem)
