import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import {passwordValidate} from '../helper/validate.js'

const Password = () => {
    
    const formik = useFormik({
        initialValues: {
            password:''
        },
        validate:passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })
  return (
      <div className='container mx-auto'>
          <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex items-center justify-center h-screen'>
                <div className={styles.glass}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold'>Hello Again!</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-400'>Enter credentials to login</span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                          <img src={avatar} alt="avatar" className={styles.profile_img} />
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <input type="password" placeholder='Password' {...formik.getFieldProps('password')} className={styles.textbox}/>
                            <button type='submit' className={styles.btn}>Sign in</button>
                        </div>
                        <div className='py-4 text-center'>
                            <span>Forgot Password <Link to="/recovery" className='text-red-600'>Recovery</Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Password
