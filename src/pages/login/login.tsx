import { Button, Flex, Form, Input, message, Typography } from "antd"
import Najot from "../../assets/najot-talim.png"
import Logo from "../../assets/najot-talim-logo.png"
import { LoginType } from "./loginTaype"
import { useLogin } from "./service/mutation/useLogin"
import { saveState } from "../../config/storage"
import { useNavigate } from "react-router-dom"
 
export const Login = () => {
    const { mutate } = useLogin();
    const navigate = useNavigate()
    const submit = (data: LoginType) => {
      
      mutate(data, {
        onSuccess: (res) => {
          message.success("Login muvaffaqiyatli amalga oshirildi");
          saveState("token", res.data);
          navigate('/app', {replace: true});
        },
        onError: () => {
          
          message.error("Login muvaffaqiyatli amalga oshirilmadi");
        },
      });
    };

  return (
    <Flex gap={'80px'}>
      <div style={{width: '600px', overflowY: 'hidden'}}>
          <img style={{width: '100%', height: '100vh' }} src={Najot} alt="Najot" />
      </div>
      <div>
        <div style={{paddingTop: '60px'}}>
          <img src={Logo} alt="logo" />
        </div>
        <Typography.Title style={{marginTop:'170px', fontWeight: 400, fontSize: '32px', lineHeight: '150%', color: '#000'}}>Tizimga kirish</Typography.Title>
        <Form style={{ width: "380px" }} onFinish={submit}>
            <div style={{ marginBottom: "45px" }}>
              <Form.Item
                name={"login"}
                label={"Login"}
                layout="vertical"
                rules={[{ message: "login kiriting" }]}
              >
                <Input
                  size="large"
                  placeholder="Loginni kiriting"
                />
              </Form.Item>
            </div>
            <div style={{ marginTop: "16px", marginBottom: "32px" }}>
              <Form.Item
                rules={[{ message: "parolni kiriting" }]}
                name={"password"}
                label={"Parol"}
                layout="vertical"
              >
                <Input.Password size="large" placeholder="Parolni kiriting"  />
              </Form.Item>
            </div>
            <div style={{ marginTop: "64px" }}>
              <Form.Item>
                <Button
                  style={{ width: "100%"}}
                  htmlType="submit"
                  type="primary"
                >
                  Kirish
                </Button>
              </Form.Item>
            </div>
          </Form>
      </div>
    </Flex>
  )
}