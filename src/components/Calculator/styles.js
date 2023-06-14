import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
	width: 60%;
	margin: auto;
	background-color: #ffffff;
	border-radius: 24px 24px 100px 24px;
`;
const FormContainer = styled.div`

    display: flex;
    justify-content: space-around;
    gap: 20px;
    position: relative;
	margin-bottom: 2rem;
	&::after {
		content: '';
		position: absolute;
		bottom: -70px;
		height: 2px;
		width: 100%;
		background-color: grey;
	}
`;
const StyledForm = styled.div`
        
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #716F6F;


`;

const StyledLabel = styled.label`

    

`;

const StyledInput = styled.input`
    
    padding: 12px 24px;
    gap: 16px;
`

const StyledShow = styled.p`
    
    font-size: 3rem;
	font-weight: bold;
	font-style: italic;
`;

const StyledNumber = styled.span`

    display: inline-block;
	width: 75px;
	font-size: 3rem;
	font-weight: 800;
	font-style: italic;
	color: #854dff;

`;
const ArrowButton = styled.div`
	display: flex;
	position: relative;
	margin-left: auto;
	padding: 1rem;
	border-radius: 50%;
	background-color: #854dff;
`;

export {StyledContainer , FormContainer , StyledForm , StyledLabel , StyledInput , StyledShow , StyledNumber , ArrowButton }