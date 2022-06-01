import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

:root {
    --background: #ffffff;
    --darker: 	#7b7b86;
    --taskfont: #353131;
    --fonts: #a8a0a0;
    --borders: #ebe6e6;
    --headerfont: #EEE;
    --backgroundheader: #5e00b8;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Flex', sans-serif;
}

body{
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background: var(--background);
    min-width: 100vw;
    font-size: 1.25rem;
}

header{
    display: flex;
    justify-content: center;
    min-width: 100vw;
    font-size: 1rem;
    padding: 1rem 1rem;
    color: var(--headerfont);
    margin-bottom: 1rem;
    background-color: var(--backgroundheader) ;
}

.todoCreateForm {
    display: flex;
    flex-direction: column;
    box-shadow: 0rem 0.2rem 0.6rem 0.1rem var(--darker); 
    border-radius: 0.25rem;
    margin: 0 auto;
}

input, button {
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

   .todoInput {
    flex: 1 1 0%;
    background-color: var(--background);
    padding: 1rem;
    border: 0.12rem solid var(--borders);
    border-radius: 0.3rem;
    margin: 1rem;
    color: var(--fonts);
    font-size: 1.25rem;
}

  .todoInputUpdate {
    display: flex;
    align-items: center;
    background-color: var(--background);
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0.25rem;
    width: 100%;
    color: var(--fonts);
}

.todoInput::value {
    color: var(--fonts);
}

.buttonCreate {
    color: var(--headerfont);
    font-size: 1.25rem;
    text-align: center;
    background-color: var(--backgroundheader);
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.4s;
    margin: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    align-self: center;
    border-radius: 0.2rem;
}

.buttonCreate:hover {
    opacity: 0.8;
}

.buttonCreate:active {
    opacity: 0.6;
}


.todoContainer {
  flex: 1 1 0%;
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
}

.todosContainer {
    padding: 1rem;
}

.todo .TodoInfo  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background);
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0.25rem;
    width: 100%;
}

.todoUpdateForm {
  display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background);
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0.25rem;
    width: 100%;
}

.todoInputUpdate {
  font-size: 1.25rem;
}

button{
  padding: 0.25rem;
  color: var(--darker);
  font-size: 2rem;
}
`;
export default GlobalStyles;