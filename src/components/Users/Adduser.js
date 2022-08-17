import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Addusers.module.css";
import {useState} from 'react';

export default function AddUser({...props}){
    const [enterUserName, setEnterUserName] = useState('');
    const [enterUserage, setEnterUserAge] = useState('');

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
        
        setEnterUserName('');
        setEnterUserAge('');
        // condition
        if(enterUserName.trim().length === 0 || enterUserage.trim().length ===0){
            return;
        }

        if(+enterUserage < 1){
            return;
        }
        
        console.log( enterUserName +"   "+enterUserage)
        
    };

    return(
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
    );
};