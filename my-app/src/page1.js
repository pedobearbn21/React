import React  from 'react';

class Page1 extends React.Component {
    constructor(props) {
        super(props)
        this.props = super.props
        this.state = {
           name: 'a',
           lastname: 'b'
        }
    }
    render() {
        return (
            <div className="Page1">
                  <h1>Hello, { this.props.name + this.state.lastname }</h1>
            </div>
        );
    }
}
export default Page1