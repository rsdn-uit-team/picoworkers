import Button from 'components/Button/Button';
// import useLocalStorage from "hooks/useLocalStorage";

export default function Demo() {
  // const [auth, setAuth] = useLocalStorage("auth", {});

  return (
    <>
      <p>Button Default</p>
      <div>
        <Button>Default</Button>
        <Button color="success">Success</Button>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
      </div>
      <p>Button Outlined</p>
      <div>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>
      <p>Button Contained</p>
      <div>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </div>
      <p>Button Radius</p>
      <div>
        <Button variant="contained">Error</Button>
        <Button variant="contained" radius={5}>
          Radius 5px
        </Button>
        <Button variant="contained" radius={10}>
          Radius 10px
        </Button>
      </div>
    </>
  );
}
