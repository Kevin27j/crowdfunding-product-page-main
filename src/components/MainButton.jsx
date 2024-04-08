import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import { PropTypes } from 'prop-types';

const CustomButton = styled(Button)({
    borderRadius: '30px',
    boxShadow: 'none',
    backgroundColor: 'hsl(176, 50%, 47%)',
    color: 'white',
    padding: '15px 30px'
})


function MainButton({ title }) {
    return (
        <>
            <CustomButton sx={{ fontWeight: "bold", whiteSpace: "nowrap", fontSize: "13px" }} variant="text"> {title} </CustomButton>

        </>
    )
}

MainButton.propTypes = {
    title: PropTypes.string.isRequired
}

export default MainButton