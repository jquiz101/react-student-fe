import React from 'react'

class StudentList extends React.Component {

    state = {
        students: [
            {
                "id": 6,
                "first_name": "Sam",
                "last_name": "Smith",
                "email": "samsmith@aol.com",
                "major": "Being super awesome",
                "ip_address": "67.76.188.26"
            },
            {
                "id": 7,
                "first_name": "Roger",
                "last_name": "Smith",
                "email": "samsmith@aol.com",
                "major": "Being super awesome",
                "ip_address": "67.76.188.26"
            }
        ]
    }

    // lifecycle hook that runs when the component is displayed
    componentDidMount() {
        // will run when component has loaded on screen
        // run API calls here

        fetch("http://localhost:5000/api/students")
            // take the response, which is a string, and turn into JSON
            .then((response) => response.json())  // boilerplate code
            .then((studentData) => {
                console.log(studentData)

                // replace objects in state (students) with data from response (studentData)
                this.setState({
                    students: studentData
                })
            })
            .catch(e => console.log(e.message))
    }

    // this method is required in this component
    render(){
        return (
            <div className='StudentList'>
                <ul>
                    {this.state.students.length && this.state.students.map((student, index) => {
                        return <li key={index}>{student.first_name} {student.last_name}</li>
                    })}
                </ul>
            </div>
        )
    }

}

export default StudentList;