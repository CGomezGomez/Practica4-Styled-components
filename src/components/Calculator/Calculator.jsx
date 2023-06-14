import { useState } from "react";
import { ArrowButton, StyledContainer, FormContainer, StyledInput, StyledLabel, StyledShow, StyledNumber, StyledForm } from "./styles";

const Calculator = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [years, setYears] = useState('--');
    const [months, setMonths] = useState('--');
    const [days, setDays] = useState('--');
  
    const handleButtonClick = () => {
        if (day && month && year) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;
            const currentDay = currentDate.getDate();
      
            let calculatedY = currentYear - year;
            let calculatedM = currentMonth - month;
            let calculatedD = currentDay - day;
          
            

              setYears(calculatedY);
              setMonths(calculatedM);
              setDays(calculatedD);
           
        }
      };
  
    return (
      <StyledContainer>
          <FormContainer>

              <StyledForm>
                <StyledLabel>DAY</StyledLabel>
                <div>
                  <StyledInput  onChange={e => {
                    setDay(e.target.value)
                }} />
                </div>
                
              </StyledForm>

              <StyledForm>
                <StyledLabel>MONTH</StyledLabel>
                <div>
                  <StyledInput  onChange={e => {
                    setMonth(e.target.value)
                    }}  />
                </div>               
              </StyledForm>

              <StyledForm>
                <StyledLabel>YEAR</StyledLabel>
                <div>
                  <StyledInput  onChange={e => {
                      setYear(e.target.value)
                  }} />
                </div>
              </StyledForm>
            
          </FormContainer>
        <ArrowButton onClick={handleButtonClick}>
          <img src="/public/images/icon-arrow.svg" alt="" />
        </ArrowButton>

        <StyledShow>
          <StyledNumber>{years}</StyledNumber>
          YEARS
        </StyledShow>

        <StyledShow>
          <StyledNumber>{months}</StyledNumber>
          MONTHS
        </StyledShow>

        <StyledShow>
          <StyledNumber>{days}</StyledNumber>
          DAYS
        </StyledShow>

      </StyledContainer>
    );
  };
  
  export default Calculator;