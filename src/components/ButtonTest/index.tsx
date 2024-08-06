import {Text} from "../Text/index";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const ButtonTest = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Text text={text} />
        </button>
    );
};
