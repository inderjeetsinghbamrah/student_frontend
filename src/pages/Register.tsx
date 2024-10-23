import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import {usernameValidate} from '../helper/validate.js'
import React, { useState } from 'react'
import {useAuthStore} from '../store/store.js'
import convertToBase64 from '../helper/convert.js'

const Username = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState();

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password:''
        },
        validate:usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || '' })
            console.log(values);
        }
    })

    /** formik dont support file upload, so using function  */

    const onUpload = async (e:React.ChangeEvent<HTMLInputElement>) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64)
    }
  return (
      <div className='container mx-auto'>
          <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex items-center justify-center h-screen'>
              <div className={styles.glass} style={{ width:'45%',paddingTop:'3em' }}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold text-center'>Happy to Join You!!</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-400'>Enter credentials to login</span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                          <label htmlFor='profile'>
                            <img src={file || avatar} alt="avatar" className={styles.profile_img} />
                          </label>
                          <input type="file" name="profile" id="profile" onChange={onUpload}/>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                          <input type="text" placeholder='Email' {...formik.getFieldProps('email')} className={styles.textbox} />
                          <input type="text" placeholder='Username' {...formik.getFieldProps('username')} className={styles.textbox} />
                          <input type="password" placeholder='Password' {...formik.getFieldProps('password')} className={styles.textbox}/>
                            <button type='submit' className={styles.btn}>Register</button>
                        </div>
                        <div className='py-4 text-center'>
                            <span>Already a User? <Link to="/" className='text-red-600'>Sign In</Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Username
