const addFunc = wrappedComponent => class extends Component {
    handleClick() {
        console.log("click");
    }


    render() {
        const props = {
            ...this.props,
            handleClick: this.handleClick
        }

        return <wrappedComponent {...props} />
    }
}