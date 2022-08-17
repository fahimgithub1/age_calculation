import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Addusers.module.css";

export default function AddUser({...props}){
    const addUsrsHandeler = (e)=>{
        e.preventDefault();
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={addUsrsHandeler} className={classes.input}>
                <lavel>User Name</lavel>
                <input id="usernam" type="text" />

                <lavel htmFor="age" >Age (Years)</lavel>
                <input id="usernam" type="text" />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};