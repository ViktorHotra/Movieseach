import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Input, Button } from '../../components';
import {
    StyledLegend,
    StyledForm,
    StyledLabel,
    StyledFormError
} from '../../styles';
import {
    StyledWrapper,
    StyledFormWrapper,
    StyledFieldset,
    StyledFormGroup
} from './styles';
import { authenticateUser } from '../../store';

const PASSWORD_MIN_LENGTH = 6;

const SIGN_IN_FIELDS = [
    {
        id: 'email',
        label: 'E-mail',
        type: 'email',
        name: 'email',
        placeholder: 'E-mail',
        validationRules: {
            required: 'E-mail is required'
        }
    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        validationRules: {
            required: 'Password is required',
            minLength: {
                value: PASSWORD_MIN_LENGTH,
                message: `Password should be at least ${PASSWORD_MIN_LENGTH} characters long`
            }
        }
    }
];

const {
    REACT_APP_FIREBASE_AUTH_URL: authUrl,
    REACT_APP_FIREBASE_API_KEY: apiKey
} = process.env;

const authSelector = state => !!state.auth.idToken;

export const AuthPage = () => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            email: 'john@gmail.com',
            password: '123456'
        }
    });
    const isAuthenticated = useSelector(authSelector);
    const dispatch = useDispatch();

    const onSubmit = async values => {
        const user = {
            ...values,
            returnSecureToken: true
        };
        const url = `${authUrl}signInWithPassword?key=${apiKey}`;

        try {
            const {
                data: { idToken, localId }
            } = await axios.post(url, user);

            dispatch(authenticateUser(idToken, localId));
        } catch (e) {
            console.error(e);
        }
    };

    const onError = errors => console.log(errors);

    if (isAuthenticated) return <Redirect to="/" />;

    return (
        <StyledWrapper>
            <StyledFormWrapper>
                <div>Tabs</div>

                <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
                    <StyledFieldset>
                        <StyledLegend>Sign In</StyledLegend>

                        {SIGN_IN_FIELDS.map(
                            ({
                                id,
                                label,
                                name,
                                validationRules,
                                ...other
                            }) => (
                                <StyledFormGroup key={id}>
                                    <StyledLabel htmlFor={id}>
                                        {label}
                                    </StyledLabel>

                                    <Input
                                        $hasError={errors[name]}
                                        ref={register(validationRules)}
                                        id={id}
                                        name={name}
                                        {...other}
                                    />

                                    <ErrorMessage
                                        errors={errors}
                                        name={name}
                                        as={StyledFormError}
                                    />
                                </StyledFormGroup>
                            )
                        )}
                    </StyledFieldset>

                    <Button type="submit">Submit</Button>
                </StyledForm>
            </StyledFormWrapper>
        </StyledWrapper>
    );
};
