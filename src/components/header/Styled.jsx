export const Styled = () => {

  const StyledFormWrapper = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
  `;

  const StyledForm = Styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  `;

  const StyledInput = Styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
  `;

  const StyledTextArea = Styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${sharedStyles}
  `;
  const StyledButton = Styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
  `;

  const StyledFieldset = Styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;
  
    legend {
      padding: 0 10px;
    }
  
    label {
      padding-right: 20px;
    }
  
    input {
      margin-right: 10px;
    }
  `;

  const StyledError = Styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
  `;
}