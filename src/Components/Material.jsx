import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

export const ButtonMaterial = withStyles({
    root: {
        background: 'linear-gradient(40deg, #orchid 50%, #purple 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: '105px',
        width: '100px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);


export const ButtonDeleteStyled = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'red',
    },
})(DeleteIcon);



