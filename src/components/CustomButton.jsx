// React Component <CustomButton />

function CustomButton(props) {
    return (
      <a href={props.url}>
        <button className="btn"> {props.btnText} </button>
      </a>
    );
  }
  
  export default CustomButton;