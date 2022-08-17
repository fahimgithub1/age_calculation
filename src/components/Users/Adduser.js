import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Addusers.module.css";
import {useState} from 'react';
import ErrorModel from "../UI/ErrorModal";

export default function AddUser({...props}){
    const [enterUserName, setEnterUserName] = useState('');
    const [enterUserage, setEnterUserAge] = useState('');
    const [error, setError] = useState();

    const userNamchandeler= (e) =>{
        setEnterUserName(e.target.value);
        // console.log(enterUserName);
    }
    
    const userageshandeler= (e) =>{
        setEnterUserAge(e.target.value);
        // console.log(enterUserage);
    }

    // submit handeler
    const addUsrsHandeler = (e)=>{
        e.preventDefault();
        
        // condition
        if(enterUserName.trim().length === 0 || enterUserage.trim().length ===0){
            setEnterUserName('');
            setEnterUserAge('');

            setError({
                title: 'Invalid input',
                massage: 'Please enter a valid name and age (non-empty valus).',
            })

            return;
        }

        if(+enterUserage < 1){
            setEnterUserName('');
            setEnterUserAge('');

            setError({
                title: 'Invalid age',
                massage: 'Please enter a valid age (age>0).',
            })

            return;
        }
        
        props.onAddUser(enterUserName, enterUserage);
        // console.log(enterUserName+"  "+enterUserage)
        setEnterUserName('');
        setEnterUserAge('');
    };

    const ErrorHandler = () =>{
        setError(null);
    };

    return(
        <div>
            {error && <ErrorModel title={error.title} massage={error.massage} onConferm={ErrorHandler}/>}
           
            <Card className={classes.input}>
                <form onSubmit={addUsrsHandeler} className={classes.input}>
                    <label>User Name</label>
                    <input id="usernam" 
                        type="text" 
                        value={enterUserName}
                        onChange={userNamchandeler} />

                    <label htmlFor="age" >Age (Years)</label>
                    <input id="usernam" 
                        type="text" 
                        value={enterUserage}
                        onChange={userageshandeler} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};