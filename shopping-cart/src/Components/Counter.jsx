import React from "react";

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    shouldComponentUpdate(){
        return false;
    }

    render() {
        const {count} = this.state;
        return<> 
                <h1>{count}</h1>
                <button onClick={()=>this.setState({count: count+1})}>Increment</button>
                <button onClick={()=>this.setState({count: count-1})}>Decrement</button>
        </> 
        
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },1000)
    }
};
export default Counter;