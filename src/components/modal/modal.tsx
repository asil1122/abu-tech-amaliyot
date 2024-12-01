import { useState } from "react";
import { Button, Form, Input, message, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useKursCreate } from "../../service/mutation/useKursCreate";
import { createType, dataTypes } from "./modal-types";
import { useCreateFile } from "../../service/mutation/useCreateFile";
import { client } from "../../config/query-client";

export const ContractModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { mutate } = useKursCreate()
  const { mutate: upFile } = useCreateFile()
  const [dataCr, setDataCr] = useState<dataTypes>()

  const onCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleFileUpload = (file: any) => {
    const formData = new FormData();
    formData.append("files", file.file);

    upFile(formData, {
      onSuccess: (res:any) => {
        setDataCr(res);
        message.success("File uploaded successfully!");
        file.onSuccess?.();
      },
      onError: (err) => {
        message.error("File upload failed.");
        file.onError?.(err);
      },
    });
  };

  const submit = (data: createType) => {
    mutate(
      {
        title: data.title,
        courseId: 0,
        attachment: {
          url: dataCr?.data[0].path,
          origName: dataCr?.data[0].fileName,
          size: dataCr?.data[0].size,
        },
      },
      {
        onSuccess: (res) => {
          console.log(res);
          message.success("Success");
          setIsModalOpen(false)
          client.invalidateQueries({queryKey:["contract"]})
        },
        onError: (err) => {
          console.log(err);
          message.error("Error occurred while saving user");
        },
      }
    );
  };



  return (
    <>
      <Button
        type="primary"
        style={{ padding: "10px 20px", height: "45px" }}
        onClick={() => setIsModalOpen(true)}
      >
        Qo‘shish
      </Button>

      <Modal
        title="Shartnoma yaratish"
        open={isModalOpen}
        footer={null}
        onCancel={onCancel}
        centered

      >
        <Form layout="vertical" onFinish={submit}>
          <div style={{ marginBottom: "80px" }}>
            <Form.Item
              name={"title"}
              label={"Kurs"}
              rules={[{ required: true, message: "Kursni tanlang" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ marginTop: "-20px", marginBottom: "-20px" }}>
            <Form.Item
              name={"courseId"}
              label="Nomi"
              rules={[{ required: true, message: "Nomini kiriting" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <Upload
            accept=".jpg,.png,.doc,.docx"
            showUploadList={true}
            customRequest={handleFileUpload}
            maxCount={1}
            listType="text"
          >
            <Button icon={<UploadOutlined />}>Faylni yuklash</Button>
          </Upload>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Saqlash
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

