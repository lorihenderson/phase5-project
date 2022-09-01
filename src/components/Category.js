// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// export const LoginForm = ( { setCurrentUser } ) => {
//   const navigate = useNavigate();
//   const [ formData, setFormData ] = useState({
//     username: '',
//     password: ''
//   });
//   const { username, password } = formData;
//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     }).then( (res) => {
//       if (res.ok) {
//         res.json().then( (user) => {
//           setCurrentUser(user);
//           navigate('/');
//         });
//       } else {
//         res.json().then( (json) => {
//           alert(json.errors);
//         });
//       }
//     });
//   };
//   return (
//     <div className='content-container'>
//     <form className='form-container' onSubmit={ handleSubmit }>
//       <h1>LOGIN</h1>
//       <h2>Please enter your username and password to continue!</h2>
//         <label>Username</label>
//         <input
//           type='text'
//           required
//           onChange={ handleChange }
//           name='username'
//           value={ username }
//         ></input>
//         <label>Password</label>
//         <input
//           type='password'
//           required
//           onChange={ handleChange }
//           name='password'
//           value={ password }
//         ></input>
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   )
// };




// // import React, { useState } from 'react'

// // function Category( { currentUser } ) {

// //     const [category, setCategory] = useState({topic: ""})

// //     const handleCategory = (e) => {
// //         setCategory(e.target.value)
// //       }

// //     const handleSubmit = (e) => {
// //         e.preventDefault()

// //         fetch("http://localhost:3000/categories", {
// //             method: "POST",
// //             mode: "no-cors",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify( category ),
// //         })
// //         .then(res => res.json())
// //         .then(data => handleSubmit(data))
// //     }
    
// //     return (
// //         <>
// //             <div>Category</div>
        
// //             <form className="form" onSubmit={handleSubmit} >
// //                 <select value={category} onChange={handleCategory}>
// //                     {/* <option value="Default">Select category</option> */}
// //                     <option value="History">History</option>
// //                     <option value="Science">Science</option>
// //                     <option value="Literature">Literature</option>
// //                     <option value="Pop culture">Pop culture</option>
// //                     <option value="Sports">Sports</option>
// //                     <option value="Music">Music</option>
// //                     <option value="TV and Film">TV and Film</option>
// //                     <option value="Mythology">Mythology</option>
// //                     <option value="Food and Drink">Food and Drink</option>
// //                     <option value="Geography">Geography</option>
// //                 </select>
// //             </form>
// //         </>
// //     )
// // }

// // export default Category;