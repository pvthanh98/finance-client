import NumberFormat from 'react-number-format';
import { CurrencyFormatInterface } from '../../interfaces/common-interface';

export const CurrencyFormat = (props: CurrencyFormatInterface) => {
    return <div style={{ color: "red", fontWeight: "bold" }}>
        <NumberFormat
            value={props.value}
            displayType={'text'}
            thousandSeparator={true}
        /> {' '} {props.prefix}
    </div>
}