import classas from './Button.module.css';

export default function Button({...props}){
    return(
        <button className={`${classas.button} ${props.classas}`} 
                type={props.type || 'button'} 
                onClick={props.onClick}>
            {props.children}
        </button> 
    );
};