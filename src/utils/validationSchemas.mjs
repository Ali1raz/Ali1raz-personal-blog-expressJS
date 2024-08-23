export const validationSchemas = {
  title: {
    isLength: {
      options: {
        min: 5,
        max: 20,
      },
      errorMessage: "title must be 5-20 characters",
    },
    notEmpty: {
      errorMessage: "title cant be empty",
    },
    isString: {
      errorMessage: "title must be string",
    },
  },
  content: {
    isLength: {
      options: {
        min: 5,
        max: 50,
      },
      errorMessage: "content must be 5-50 characters",
    },
    notEmpty: {
      errorMessage: "content cant be empty",
    },
    isString: {
      errorMessage: "content must be string",
    },
  },
};
