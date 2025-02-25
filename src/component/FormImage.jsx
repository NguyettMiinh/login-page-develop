
import FooterForm from "./FooterForm";

function FormImage({imageUrl}) {
    return (
      <div className="form-img">
          <div className="logo">Logo</div>
          <div>
              <img src= {imageUrl} />
          </div>
          <FooterForm idName= "copy-right" content= "Copyright Reserved &#xA9; 2021"/>
      </div>
    );
  }

export default FormImage;