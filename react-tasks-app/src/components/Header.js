import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title }) => {
    const onClickFunct = (e) => {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClickFunct}/>
        </header>
    );
};

Header.propTypes = {
    title : PropTypes.string
}

export default Header;
