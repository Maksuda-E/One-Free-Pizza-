import {useState} from "react";
import uuid from "react-uuid";
import "./Pizza.scss";
import {useDispatch} from "react-redux";
import { addOrder } from "../../redux/ordersSlice";
import api from '../../api';

export default function Pizza() {
     const [style, setStyle] = useState(false);
     const [crust, setCrust] = useState(false);
     const [cheese, setCheese] = useState(false);
     const [name, setName] = useState('');
     const [address, setAddress] = useState('');
     const [blankerrorMessage, setBlankErrorMessage] = useState(null); 
     const [successMessage, setSuccessMessage] = useState(false);
     const[save, setSave] = useState(false);

     const dispatch = useDispatch();
    
     const StyleHandle = (event) => {
        setStyle(event.target.value);
      }
  
      const CrustHandle = (event) => {
         setCrust(event.target.value);
      }

      const CheeseHandle = (event) => {
        setCheese(event.target.value);
     }

     const NameHandle = (event) => {
        setName(event.target.value);
     }

     const AddressHandle = (event) => {
        setAddress(event.target.value);
     }

      const SubmitButtonHandle = (event) => {
        event.preventDefault();

        let error = [];

        if(style === false){
            error.push("Select a style");
        }
        if(crust === false){
            error.push("Select a crust");
        }
        if(cheese === false){
            error.push("Select extra cheese as yes/no");
        }
        if(name === ''){
            error.push("Enter your name");
        }
        if(address === ''){
            error.push("Enter your address");
        }
       
        if (error.length > 0) {
			setBlankErrorMessage(error);
		}

        else{
            const newOrder = {
                id: uuid(),
                style: style,
                crust: crust,
                cheese: cheese,
                name: name,
                address: address,
            };

            setSave(true);
            
            api.post('/orders', newOrder)
            .then((response)=> {
                if(response.status === 201){
                    dispatch(addOrder(newOrder));
                    setStyle(false);
                    setCrust(false);
                    setCheese(false);
                    setName('');
                    setAddress('');
                    setBlankErrorMessage(null);
                    setSuccessMessage(true);
                }
            });
        }
       
    }


    const SubmitSuccess = () => {
		return (
			<div className='success'>
				<strong className="message">Success!</strong>
				<p className="successtext">We got your order.</p>
			</div>
		);
	}

	const Form = () => {
        return (
            <div>
            <div>
            <h1 className="heading">Order Here</h1>
            <p className="para">Create your own pizza by your choice and submit your order</p>
            <form className="form" onSubmit={SubmitButtonHandle}>
            {blankerrorMessage && (
					<div className='error'>
						<ul>
							{blankerrorMessage.map(
								(error, index) => (
									<li key={index}>{error}</li>
								)
							)}
						</ul>
					</div>

				)}
                <div className="field">
                    <label>Style</label><br/>
                    <select className="status"
                    value={style}
                    onChange={StyleHandle}
                    >
                        <option className="option" value="-- Select --">-- Select --</option>
                        <option className="option" value="Hawaiian">Hawaiian</option>
                        <option className="option" value="Pepperoni">Pepperoni</option>
                        <option className="option" value="Canadian">Canadian</option>
                        <option className="option" value="Supreme">Supreme</option>
                        <option className="option" value="Cheese">Cheese</option>
                        <option className="option" value="Margherita">Margherita</option>
                    </select>
                </div>
                <div className="field">
                    <label>Crust</label><br/>
                    <select className="status"
                    value={crust}
                    onChange={CrustHandle}
                    >
                        <option className="option" value="-- Select --">-- Select --</option>
                        <option className="option" value="Original Crust">Original Crust</option>
                        <option className="option" value="Thin Crust">Thin Crust</option>
                        <option className="option" value="Gluten-Free Crust">Gluten-Free Crust</option>
                    </select>
                </div>

                <div className="field">
                    <label>Add Extra Cheese</label><br/>
                    <select className="status"
                    value={cheese}
                    onChange={CheeseHandle}
                    >
                        <option className="option" value="-- Select --">-- Select --</option>
                        <option className="option" value="Yes">Yes</option>
                        <option className="option" value="No">No</option>
                    </select>
                </div>

                <div className="field">
                    <label>Name</label><br/>
                    <input className="input"
                      type="text"
                      placeholder="Enter your full name"
                      maxLength={150}
                      value={name}
                      onChange={NameHandle}
                    />
                    </div>

                    <div className="field">
                    <label>Address</label><br/>
                    <input className="inputaddress"
                      type="text"
                      placeholder="Enter your address"
                      maxLength={150}
                      value={address}
                      onChange={AddressHandle}
                    />
                    </div>
                <button className="addorder" type="submit">Add</button>
            </form>
            </div>
            </div>
        );
}

const Save = () => {
    return (
        <div>
            <img className="saving" src="images/saving.gif" alt="saving"/>
        </div>
    );
}


if (successMessage) {
    return SubmitSuccess();
}
else if (save) {
    return Save();
}
else {
    return Form();
}
}



