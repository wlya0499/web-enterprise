import './button.css';

type ButtonProps = {
    flag: string;
}

export default function Button({flag}: ButtonProps){
    function handleClick(){
        alert('Tombol Clicked!');
    }

    function handleClickTrue(){
        alert('Tombol Clicked with TRUE Value');
    }

    return <button className='tombol' onClick={flag == 'Hello' ? handleClickTrue : handleClick}>
        Click Me
    </button>
}