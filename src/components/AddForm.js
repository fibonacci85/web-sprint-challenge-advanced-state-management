// import { render } from '@testing-library/react';
// import { set } from 'msw/lib/types/context';
import React, { useState } from 'react';
import {connect} from "react-redux";
import { addSmurf } from '../actions/index';


export const AddForm = (props) => {
  
    const smurfValues = {
        name: "",
        position: "",
        nickname: "",
        description:"",
        id: Math.random()
    };

    const [smurf, setSmurf] = useState(smurfValues)

    console.log(smurf)


        const handleChange = (e) => {
         setSmurf({...smurf, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            props.addSmurf(smurf)
        }
        
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="name">Name:</label><br/>
                            <input name="name" 
                            id="name" type="text" 
                            value={smurf.name} 
                            onChange={handleChange} />
                        <label htmlFor="position">Position:</label><br/>
                            <input name="position" 
                            id="position" type="text" 
                            value={smurf.position} 
                            onChange={handleChange} />
                        <label htmlFor="nickname">Nickname:</label><br/>
                            <input name="nickname" 
                            id="nickname" type="text" 
                            value={smurf.nickname} 
                            onChange={handleChange} />
                        <label htmlFor="description">Description:</label><br/>
                            <input name="description" 
                            id="description" 
                            type="text" 
                            value={smurf.description} 
                            onChange={handleChange}/>
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button>Submit Smurf</button>
            </form>
        </section>);
        }
    
const mapStateToProps = state => {
    return{
        smurf: state.smurf,
        isLoading: state.isLoading,
        error: state.error
    }
}


export default connect(mapStateToProps, {addSmurf})(AddForm);

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