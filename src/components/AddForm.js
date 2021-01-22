import { render } from '@testing-library/react';
// import { set } from 'msw/lib/types/context';
import React, { useState } from 'react';
import {connect} from "react-redux";



const AddForm = (props) => {
    console.log(props)

const [name, setName] = useState("");
const [position, setPosition] = useState("");
const [nickname, setNickname] = useState("");
const [description, setDescription] = useState("");
const [smurfList, setSmurfList] = useState(props.smurfList)


        const handleChange = (e) => {
            setName(e.target.value);
            setPosition(e.target.value)
            setNickname(e.target.value)
            setDescription(e.target.value)
        }
    
        const handleClick = (e) => {
            e.preventDefault();
            setSmurfList(...smurfList, name,position,nickname,description)
        }
        
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <form onChange={handleChange}>
                        <label htmlFor="name">Name:</label><br/>
                        <input name="name" id="name" type="text" value={name} />
                        <label htmlFor="position">Position:</label><br/>
                        <input name="position" id="position" type="text" value={position} />
                        <label htmlFor="nickname">Nickname:</label><br/>
                        <input name="nickname" id="nickname" type="text" value={nickname} />
                        <label htmlFor="description">Description:</label><br/>
                        <input name="description" id="description" type="text" value={description} />
                    </form>
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button onClick={handleClick}>Submit Smurf</button>
            </form>
        </section>);
        }
    
const mapStateToProps = state => {
    console.log(state.smurf)
    return{
        smurfList: state.smurf
    }
}


export default connect(mapStateToProps)(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.