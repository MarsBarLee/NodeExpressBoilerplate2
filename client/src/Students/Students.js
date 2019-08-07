import React, {Component} from 'react';

class Students extends Component {
  constructor(){
    super();
    this.state = {
      students: []
    }
  }

  async componentDidMount() {
    const res = await fetch('/api/students');
    const data = await res.json();
    this.setState({
      students: data
    })
  }

render(){
  const {students} = this.state
  if(students.length){
  return (
    <ul>
    {students.map(el => {
      return(
        <li key={el.id}>{el.firstName}</li>
      )
    })}
    </ul>
  )
  }else {
    return(
      <div>Loading...If you see this, that means the back-end server ins't running and we can't retrieve our data in our API call to it.</div>
    )
  }
}
}

export default Students;