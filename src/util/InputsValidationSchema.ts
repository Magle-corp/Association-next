// Use.
import * as Yup from 'yup';

/**
 * Validation schema for Formik form.
 */
const InputsValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'minimum 2 caractères')
    .max(20, 'maximum 20 caractères')
    .required('information requise'),
  surname: Yup.string()
    .min(2, 'minimum 2 caractères')
    .max(20, 'maximum 20 caractères')
    .required('information requise'),
  email: Yup.string()
    .email('adresse email invalide')
    .required('information requise'),
  message: Yup.string()
    .min(20, 'minimum 20 caractères')
    .max(200, 'maximum 200 caractères')
    .required('information requise'),
});

export { InputsValidationSchema };
