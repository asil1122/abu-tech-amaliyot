import { Button, Dropdown, Table } from "antd";
import { useGetContract } from "./service/query/useGetContract";
import { MoreOutlined, EditOutlined } from "@ant-design/icons";

interface ColumnType {
  title: string;
  dataIndex: string;
  key: string;
}

export const Contracts = () => {
  const { data } = useGetContract();


  const dataSource = data?.data?.contracts?.map((item, index: number) => ({
    key: index + 1,
    id: item.id,
    name: item.title,
    nomi: item.attachment ? item.attachment.origName : "",
  })) || [];



  const columns: ColumnType[] = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Nomi",
      dataIndex: "nomi",
      key: "nomi",
    },
    {
      title: "Kurs",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      dataIndex: "change",
      key: "change",
      render: () => (
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: "Tahrirlash",
                icon: <EditOutlined />,
              },
            ],
          }}
        >
          <Button style={{ border: "2px solid #D9D9D9" }} icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];


  return (
    <div className="table-wrapper">
      <div style={{ marginTop: "20px" }}>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};


