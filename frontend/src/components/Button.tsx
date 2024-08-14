

interface Props {
    buttonText: string;
    onButtonSelect: () => void; 
    showText: string; 
    showTextVisibile: boolean;
}

function Button({buttonText, onButtonSelect, showText, showTextVisibile}: Props) {
    return (
        <>
        {showTextVisibile && <div>{showText}</div>}
        <button className="btn btn-primary" 
        onClick={onButtonSelect}>
            {buttonText}
        </button>
        </>
    )
}

export default Button;