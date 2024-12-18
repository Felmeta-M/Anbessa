import PropTypes from 'prop-types';

const Button = ({ label, iconURL, backgoundColor, borderColor, textColor, fullWidth }) => {
    return <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgoundColor
            ? `${backgoundColor} ${borderColor} ${textColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && 'w-full'}
    `}>
        {label}
        {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>;
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    iconURL: PropTypes.string.isRequired,
    backgoundColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default Button;