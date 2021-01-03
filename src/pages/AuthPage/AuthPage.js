import { Input, Button } from '../../components';
import { StyledLegend, StyledForm, StyledLabel } from '../../styles';
import {
    StyledWrapper,
    StyledFormWrapper,
    StyledFieldset,
    StyledFormGroup
} from './styles';

const SIGN_IN_FIELDS = [
    {
        id: 'email',
        label: 'E-mail',
        type: 'email',
        name: 'email',
        placeholder: 'E-mail'
    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Password'
    }
];

export const AuthPage = () => (
    <StyledWrapper>
        <StyledFormWrapper>
            <div>Tabs</div>

            <StyledForm>
                <StyledFieldset>
                    <StyledLegend>Sign In</StyledLegend>

                    {SIGN_IN_FIELDS.map(({ id, label, ...other }) => (
                        <StyledFormGroup key={id}>
                            <StyledLabel htmlFor={id}>{label}</StyledLabel>
                            <Input id={id} {...other} />
                        </StyledFormGroup>
                    ))}
                </StyledFieldset>

                <Button>Submit</Button>
            </StyledForm>
        </StyledFormWrapper>
    </StyledWrapper>
);
