import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.span`
    font-weight: 600;
    font-size: 30px;
    text-align: center;
`;

const FatText = ({text, className}) => <Text className={className}>{text}</Text>

FatText.propTypes = {
    text: PropTypes.string.isRequired
};

export default FatText;