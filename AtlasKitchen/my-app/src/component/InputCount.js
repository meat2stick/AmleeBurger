import { useEffect, useState } from 'react';
import { Button, Input } from "antd";

function InputCount({ disableField }) {
    const [initialValue, setInitialValue] = useState(1);
    const [currentValue, setCurrentValue] = useState(0);

    const onClickMinus = () => {
        if (parseInt(currentValue) > 0) {
            setCurrentValue(currentValue - 1);
        }
    }
    const onClickPlus = () => {
        if (parseInt(currentValue) < 9) {
            setCurrentValue(currentValue + 1);
        }
    }

    useEffect(() => {
        setCurrentValue(initialValue);
    }, []);

    return (
        <div className='flex flex-row w-30 bg-white '>
            <Button disabled={disableField} onClick={onClickMinus}>-</Button>
            <div className='w-8'>
                <Input disabled={disableField} value={currentValue} />
            </div>
            <Button disabled={disableField} onClick={onClickPlus} >+</Button>
        </div>
    )
}

export default InputCount;