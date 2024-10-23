import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import {resetPasswordValidation} from '../helper/validate.js'

const Reset = () => {

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword:''
        },
        validate:resetPasswordValidation,
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
                <div className={styles.glass} style={{ width:"50%" }}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold'>Reset</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-400'>Enter a new Password</span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>

                        <div className='flex flex-col gap-3 justify-center items-center'>
                          <input type="password" placeholder='Password' {...formik.getFieldProps('password')} className={styles.textbox} />
                          <input type="password" placeholder='Confirm Password' {...formik.getFieldProps('confirmPassword')} className={styles.textbox}/>
                            <button type='submit' className={styles.btn}>Reset</button>
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

export default Reset
