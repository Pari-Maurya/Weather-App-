import Button from '@mui/material/Button';

function App() {
  let handleClick = () =>{
    alert("Button clicked!");
  }

  return (
    <>
      <h1>Material UI</h1>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click me!
      </Button>
    </>
  )     
}

export default App
