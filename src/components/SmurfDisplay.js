import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';
import { Smurf } from "./Smurf";

const SmurfDisplay = ({smurf,getSmurf,error,isFetching}) => {

   useEffect(() => {
    getSmurf()
   }, []);

   if (error) {
       return <h2>There's an error...</h2>
   }
   if (isFetching) {
       return <h2>Loading Smurfs...</h2>
   }
   
        return(
        <div>
            {smurf.map(item => (
              <Smurf smurfs={item}/>  
            ))} 
        </div>)
    }

const mapStateToProps = state => {
    return {
        smurf:state.smurf,
        isFetching:state.isFetching,
        error: state.error
        
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfDisplay)

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.