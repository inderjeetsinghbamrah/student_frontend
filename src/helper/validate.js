import toast from "react-hot-toast";

export async function resetPasswordValidation(values) {
    const error = passwordVerify({}, values);

    if (values.password !== values.confirmPassword) {
        error.exist = toast.error("Password dont match!...");
    }

    return errors;
}


export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}

function passwordVerify(error = {}, values) {
    const specialChars= /[`!@#$%^&*()_+\-=\[\];'":\\|,.<>\/?~]/;
    if (!values.password) {
        error.password = toast.error("Password is Required...!");
    } else if (values.password.includes(" ")) {
        error.password = toast.error("Invalid Password");
    } else if (!specialChars.test(values.password)) {
        error.password = toast.error("Password should have at least one special character");
    }

    return error;
}

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors;
}

function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username is Required...!");
    } else if (values.username.includes(" ")) {
        error.username = toast.error("Invalid Username");
    }

    return error;
}
