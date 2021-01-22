import { render } from '@testing-library/react';
import React, { useState } from 'react';

const AddForm = () => {

const [input, setInput] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
})


        const handleChange = (e) => {
            setInput(e.target.value);
        }
    
        const handleClick = () => {

        }
        
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <form onChange={handleChange}>
                        <label htmlFor="name">Name:</label><br/>
                        <input name="name" id="name" type="text" value={input} />
                        <label htmlFor="position">Position:</label><br/>
                        <input name="position" id="position" type="text" value={input} />
                        <label htmlFor="nickname">Nickname:</label><br/>
                        <input name="nickname" id="nickname" type="text" value={input} />
                        <label htmlFor="description">Description:</label><br/>
                        <input name="description" id="description" type="text" value={input} />
                    </form>
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button onClick={handleClick}>Submit Smurf</button>
            </form>
        </section>);
        }
    



export default AddForm;

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