import React, {Component} from 'react';
 
class RenderArray extends Component {
    render() {
        const data = [{
            firstname: "Juan",
            lastname: "Dela Cruz",
            age: 21
        }, 
        {
            firstname: "Mark",
            lastname: "Paul",
            age: 22
        }, 
        {
            firstname: "Paul",
            lastname: "Mark",
            age: 23
        }];
 
        const listItems = data.map((d) => <ul key={[d.firstname,d.lastname,d.age]}>{["",d.firstname," ",d.lastname," ",d.age]} </ul>);
 
        return (
            <center>
            <div class="jumbotron">
                    <h1>Render Array</h1>
                    <h3>{listItems}</h3>
            </div>
            </center>
        )
    }
}
    
export default RenderArray;