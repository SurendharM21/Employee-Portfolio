import './App.css';
import { useState} from 'react';
import Multiselect from 'multiselect-react-dropdown'
import axios from 'axios'




function App() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    image:null,
    bio:'',
    skills:[],
    resp:'',
    int:'',
    exp:'',
    tag:'',
    phone:'',
  });
 

  const handleChange = (e) => { 
    const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
     }
  const options=['C','Java','JavaScript','Python'];
  const[selects,setSelects]=useState([]);
const handleselectChange=(e)=>
{
  const newlySelectedSkills = e.filter(option => !formData.skills.includes(option));
  const removedSkills = formData.skills.filter(option => !e.includes(option));
  
  setSelects(e);
  setFormData(prevState => ({
    ...prevState,
    skills: [...prevState.skills.filter(skill => !removedSkills.includes(skill)), ...newlySelectedSkills]
  }));
}
const handleFileChange = (e) => {
  setFormData({
    ...formData,
    image: e.target.files[0],
  });
};
const onremove=(e)=>
{
  const remainingSkills = selects.filter(option => option !== e);
  setSelects(remainingSkills);
  setFormData(prevState => ({
    ...prevState,
    skills: prevState.skills.filter(skill => skill !== e)
  }));
}
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('name', formData.name);
  data.append('email', formData.email);
  data.append('role', formData.role);
  data.append('bio', formData.bio);
  data.append('image', formData.image);
  data.append('resp',formData.resp);
  data.append('int',formData.int);
  data.append('tag',formData.tag);
  data.append('exp',formData.exp);
  data.append('phone',formData.phone);
  data.append('skills',formData.skills);

  try {
    const res = await axios.post('http://localhost:4000/api/submitForm', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className='body'>
      <div className='container'>
        <h2 style={{color:'#333'}}>Registration Form</h2>
        <form className='form-group'>
          <input type='text' placeholder='Enter your name' onChange={handleChange} name='name' value={formData.name}></input>
          <input type='email' placeholder='Enter your email' onChange={handleChange} name='email' value={formData.email}></input>
          <input type='text' placeholder='Enter your role' onChange={handleChange} name='role' value={formData.role}></input>
          <textarea placeholder='Enter your bio' onChange={handleChange} name='bio' value={formData.bio}></textarea>

          <textarea placeholder='Enter your Responsiblity' onChange={handleChange} name='resp' value={formData.resp}></textarea>
          <input type='text' placeholder='Enter your experience' onChange={handleChange} name='exp' value={formData.exp}></input>
          <input type='text' placeholder='Enter your tagline' onChange={handleChange} name='tag' value={formData.tag}></input>
          <input type='text' placeholder='Enter your interests' onChange={handleChange} name='int' value={formData.int}></input>
          <input type='text' placeholder='Enter your mobile' onChange={handleChange} name='phone' value={formData.phone}></input>
         

          <input type='file' placeholder='place your photo' onChange={handleFileChange} name='image' alt='image'></input>
          <Multiselect options={options} isObject={false} showCheckbox onSelect={handleselectChange} onRemove={onremove} name="skills">
          </Multiselect>
          <button type='Submit' onClick={handleSubmit}>Submit</button>
        </form>
        </div>  
    </div>
  );
}

export default App;
