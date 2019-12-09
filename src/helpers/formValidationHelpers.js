export const loginValidate = {
  email: {
    required: true,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  },
  password: {
    required: true,
    minLength: 6
  }
};

export const loginValidateErrorText = {
  email: {
    required: "Email is Required",
    pattern: "Wrong Email Format"
  },
  password: {
    required: "Password is required",
    minLength: "Password is less than 6"
  }
};
