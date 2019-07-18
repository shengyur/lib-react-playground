import React from "react";
import {DetailWrapper,Header,Content} from './style';
import {connect} from 'react-redux';

class Detail extends React.PureComponent {

    render() {
      const {title,content} = this.props;
      return <DetailWrapper>
          <Header>
            {title}
          <Content dangerouslySetInnerHTML={{__html:content}}></Content>
          </Header>
      </DetailWrapper>;
    }
}
  
const mapStateToProps = (state)=>{
    return {
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
}

export default connect(mapStateToProps,null)(Detail)
