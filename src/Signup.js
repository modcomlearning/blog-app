import { useState } from "react";
const Signup = () => {
    //Hook
    const [lab_name, setName] = useState(null)
    const [permit_id, setPermit] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [failure, setFailure] = useState(null)


    //validation Phone
    const [validation, setValidationError] = useState('')
    const handlePhoneValidation = (e) => {
        const regex = /^254\d{9}$/;
        const value = e.target.value
    
        if (!regex.test(value)) {
                setValidationError('Invalid use  254XXXXXXXXX format')
        }
        else {
             setValidationError('')
        }

        setPhone(value)   
    
     }//end




    const submit = (e) => {
        console.log("Works")
        setLoading(true)
        setSuccess(null)
        setFailure(null)
        e.preventDefault();
        let lab = {lab_name, permit_id,email, phone, password}
        fetch("https://modcom.pythonanywhere.com/api/lab_signup", {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(lab)
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setLoading(false)
                setSuccess(data.message)
                setFailure(null)
                console.log(data.message);
            })
            .catch((error) => {
                setLoading(false)
                setSuccess(null)
                setFailure(error.message)
                console.log(error.message);
           })
    }//end here
    //Axios
    //Redux
    //Props
    //Dashboard


    return ( 
        <div className="form">
            <h1>Register a Lab</h1>
            <form onSubmit={submit}>
                {loading  && <div className="loading"> We are Proccessing your Request.. Please Wait..</div>}
                {success && <div className="success"> {success}</div>}  
                {failure && <div className="failure"> { failure}</div>}  
                <input type="text" placeholder="Enter Lab Name" value={lab_name}
                    onChange={(e) => setName(e.target.value)} required/> <br /><br />
                
                <input type="text" placeholder="Enter Permit ID" value={permit_id}
                    onChange={(e) => setPermit(e.target.value)} required/> <br /><br />
                
                <input type="email" placeholder="Enter Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required/> <br /><br />
                
                <input type="tel" placeholder="Enter Phone" value={phone}
                    onChange={handlePhoneValidation} required /> <br />
                {validation && <div className="failure"> { validation}</div>}
                   <br />
                
                <input type="password" placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required/> <br /><br />
                
                <button>Create Account</button>
            </form>
            {/* Lab Is {lab_name} */}
         </div>

     );
}
 
export default Signup;