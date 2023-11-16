    import { useFormik,Formik as LoginForm,Form ,Field} from 'formik'
    import React from 'react'
    import * as Yup from 'yup'

    import Text from '../components/forms/text'

    const Formik = () => {
        const initialValues = {
            usernameAndPhone:"",
            password:""
        }

        const validate = (values)=>{
            let errors = {}

            if(values.usernameAndPhone.length < 3){
                errors.usernameAndPhone = "required the three characters"
            }

            return errors
        }

        const validationSchema = Yup.object({
            password:Yup.string().required('Required')
        })

        const onSubmit = (values) => {
            console.log(values)
        }
        


    return (
        <>
        <LoginForm initialValues={initialValues} validate={validate} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    props => (
                        <Form>
                                <Field as={Text} name="usernameAndPhone" type="text" placeholder="username & phone" touch={props.touched.usernameAndPhone} error={props.errors.usernameAndPhone} />
                                <Field as={Text} name="password" type="password" placeholder="password" touch={props.touched.password} error={props.errors.password} />
                        </Form>
                    )
                }
        </LoginForm>
        </>
    )
    }

    export default Formik
