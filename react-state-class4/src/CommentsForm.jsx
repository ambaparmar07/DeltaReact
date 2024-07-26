import { useState } from "react";
import {useFormik} from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty!';
    }
  
    return errors;
  };

export default function CommentsForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // })

    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: 5
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    //let [isValid, SetIsValid] = useState(true);

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     })
    // }

    // let handleSubmit = (event) => {
    //     // if(!formData.username) {
    //     //     console.log("username is null");
    //     //     SetIsValid(false)
    //     //     event.preventDefault();
    //     //     return;
    //     // }
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     });
    // }

    return (
        <div>
            <h4>Give a comment</h4>
            <form action="" onSubmit={formik.handleSubmit}>

                <label htmlFor="username">Username: </label>
                <input type="text" 
                placeholder="username" 
                value={formik.values.username} 
                onChange={formik.handleChange} id="username" 
                name="username" />
                {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
                {/* {!isValid && <p style={{color: "red"}}>Username cannot be empty</p>}
                <br /> */}
                <br />

                <label htmlFor="remarks">Remarks: </label>
                <textarea 
                value={formik.values.remarks} placeholder="add new remarks" 
                onChange={formik.handleChange} id="remarks" 
                name="remarks"></textarea>
                <br />

                <label htmlFor="rating">Rating: </label>
                <input type="number" 
                placeholder="rating" 
                min={1} 
                max={5} 
                value={formik.values.rating} 
                onChange={formik.handleChange} 
                id="rating" 
                name="rating" />
                <br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}