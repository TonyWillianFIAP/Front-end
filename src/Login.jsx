import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control type="email" placeholder="Insira seu email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Insira a senha" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Continuar
      </Button>
      <br/>
      <Form.Text className="text-muted">
          Nós nunca vamos compartilhar suas informações.
        </Form.Text>
    </Form>
  );
}

export default Login