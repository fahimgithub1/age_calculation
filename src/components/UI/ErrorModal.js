import classas from './Error.module.css';
import Card from "../UI/Card";
import Button from './Button';

export default function ErrorModel({...props}){
    return(
        <div>
            <div className={classas.backdrop} onClick={props.onConferm}/>
                <Card classas={classas.modal}>
                    <header className={classas.header}>
                        <h2>{[props.title]}</h2>
                    </header>
                    <div className={classas.content}>
                        <p>{props.massage}</p>
                    </div>
                    <footer className={classas.action} onClick={props.onConferm}>
                        <Button>okey</Button>
                    </footer>
                </Card>
        </div>
    );
};