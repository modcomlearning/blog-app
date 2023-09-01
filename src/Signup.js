import { useState } from "react";
const Signup = () => {
    //Hook
    const [lab_name, setName] = useState(null)
    const [permit_id, setPermit] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)

    //To Submit data
    const submit = (e) => {
        console.log("Works")
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
                console.log(data.message);
            })
            .catch((error) => {
                console.log(error.message);
           })

    }//end here
    //Axios


    return ( 
        <div className="form">
            <h1>Register a Lab</h1>
            <form onSubmit={submit}>
                <input type="text" placeholder="Enter Lab Name" value={lab_name}
                    onChange={(e) => setName(e.target.value)} required/> <br /><br />
                
                <input type="text" placeholder="Enter Permit ID" value={permit_id}
                    onChange={(e) => setPermit(e.target.value)} required/> <br /><br />
                
                <input type="email" placeholder="Enter Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required/> <br /><br />
                
                <input type="tel" placeholder="Enter Phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} required/> <br /><br />
                
                <input type="password" placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required/> <br /><br />
                
                <button>Create Account</button>
            </form>
            {/* Lab Is {lab_name} */}
         </div>

     );
}
 
export default Signup;