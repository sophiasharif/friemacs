import { useEffect } from 'react'
import Form from '../components/Form'

function Survey () {

    useEffect(() => {
        document.title = "FrieMacS - Survey"
      }, []);

    return( 
        <div>
        <h2>FrieMacS: A 35L Friend Matching Survey</h2> 
        <h3>(Because we all know we need it.)</h3>
        <Form/> 
        </div>
    );
}

export default Survey
