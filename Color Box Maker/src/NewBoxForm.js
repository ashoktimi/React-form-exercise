import React, {useState} from 'react';

const NewBoxForm = ({ addItem }) =>{
    const INITIAL_STATE = { color: "", width:"", height:"" };
    const [formData, setFormData] = useState(INITIAL_STATE);
  
    /** Send {name, quantity} to parent
     *    & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      addItem(formData);
      setFormData(INITIAL_STATE);
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value }= evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  
    /** render form */
    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
  
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
  
        <button>Add Box</button>
      </form>
    )
}

export default NewBoxForm;