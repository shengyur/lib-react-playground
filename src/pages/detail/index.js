import React from "react";
import {DetailWrapper,Header,Content} from './style';
import {connect} from 'react-redux';
import {actionCreaters} from './store';
import {withRouter} from 'react-router-dom';

class Detail extends React.PureComponent {

    render() {
      
      console.log(this.props.match.params.id);  

      const {title,content} = this.props;
      return <DetailWrapper>
          <Header>
            {title}
          <Content dangerouslySetInnerHTML={{__html:content}}></Content>
          </Header>
      </DetailWrapper>; 
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
  
const mapStateToProps = (state)=>{
    return {
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
}

const mapDispatchToProps = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreaters.getDetail(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail))
