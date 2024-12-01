import { Navigate, Outlet } from "react-router-dom"
import { loadState } from "../config/storage"
import { Form, Input } from "antd"
import { ContractModal } from "../components/modal"

export const MainLayout = () => {
  const token = loadState('token')
  if (!token) {
    return <Navigate to="/" replace />
  }

  return (
    <div style={{ padding: '25px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Form style={{ width: '800px' }}>
          <Form.Item>
            <Input />
          </Form.Item>
        </Form>
        <ContractModal />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
