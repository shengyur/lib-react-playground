// import React from 'react';

const iiHoc = WrappedComponent => {
    return class extends WrappedComponent {
        render() {
            console.log(this.state, 'STATE');
            return super.render();
        }
    }
}

export default iiHoc;