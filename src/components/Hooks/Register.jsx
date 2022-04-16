import React, {useRef, useState} from 'react'
let Register = ()=>{
    let [terms, setTerms] = useState(false)
    let buttonEL = useRef(null);
    let acceptTerms = (event)=>{
        //setTerms(true)
        console.log(buttonEL)
        setTerms(event.target.checked)
        if(event.target.checked == true){
            buttonEL.current.disabled = false
        }else{
            buttonEL.current.disabled = true
        }
        //buttonEL.current.disabled = !event.target.checked
    }
    return <>
    <div className="container mt-4"> <div className="row"><div className="col-md-10">
    <div className='card'>             
       <div className="card-header">
                      <pre>{JSON.stringify(terms)}</pre>
                    </div>
                    <div className="card-body">
<form>
<div className="form-check">
<input type="checkbox" className="form-check-input" value="" id="defaultCheckbox1" onClick={acceptTerms}/>
<label className="form-check-label" htmlFor="defaultCheck"> Accept Terms & Conditions</label>
</div>
<div className="">
    <input type="submit" value="submit" disabled className="btn btn-success" ref={buttonEL} />
</div>
        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Register;