import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {

    // const userSchema = ob


    const { errors, touched, handleSubmit, getFieldProps, isValid } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup
                .string("Enter string only")
                .email("Invalid email")
                .required("This field is required"),
            password: Yup
                .string("Enter string only")
                .required("This field is required")
                .min(8, "Password must be 8 characters")
                .max(20, "Password is too high than 20")
                .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
                .matches(/\d/, "Password should contain at least one number")
                .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    })

    return (
        <>
            <div className="flex min-h-full bg-slate-100 dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-24 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-32 rounded-full scale-125 w-auto"
                        src="/logo/Code Raz 1.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl dark:text-slate-100 font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" method="GET" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    {...getFieldProps("email")}
                                    autoComplete="email"
                                    required
                                    className="block w-full px-3 py-2.5 rounded-lg dark:bg-slate-800/90 dark:text-slate-100  selection:bg-rose-200 border-0 outline-none text-gray-900 shadow-sm ring-1 ring-slate-500 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                />

                                {touched.email && errors.email ? (
                                    <p className="text-red-500 m-1">{errors.email}</p>
                                ) : null}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-rose-600 hover:text-rose-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    {...getFieldProps("password")}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full px-3 py-2.5 rounded-lg dark:bg-slate-800/90 dark:text-slate-100 selection:bg-rose-200 border-0 outline-none text-gray-900 shadow-sm ring-1 ring-slate-500 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                />
                                {touched.password && errors.password ? (
                                    <p className="text-red-500 m-1">{errors.password}</p>
                                ) : null}
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={!isValid}
                                type="submit"
                                className="flex w-full justify-center rounded-full bg-rose-600 px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500 disabled:">
                        See my Github{' '}
                        <a href="https://github.com/MowlidSead" className="font-semibold leading-6 text-rose-600 hover:text-rose-500">
                            @MowlidSead
                        </a>
                    </p>
                </div >
            </div >
        </>

    )
}

export default Login