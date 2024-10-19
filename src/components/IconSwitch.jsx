
import PropTypes from 'prop-types'

export const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <header className='header'>
            <div className='icon-switch'>
                <span className="material-icons" onClick={onSwitch}>{icon}</span>
            </div>

        </header>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}
