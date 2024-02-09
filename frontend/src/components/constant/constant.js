import { Tag } from "antd";
import { Button, Table, Modal, Input, Select, DatePicker } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import Update from "../Update.todo.screen/Update";
const { Option } = Select;


function Delete(){
  
}

  const columns = [
    {
      id: "1",
      key: "title",
      title: "title",
      dataIndex: "title",
    },
    {
      id: "2",
      key: "description",
      title: "description",
      dataIndex: "description",
    },
    {
        id: "3",
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        ),
      },
      {
        id: "4",
        key: "status",
        title: "Status",
        dataIndex: "status",
      },
      {
        id: "5",
        key: "action",
        title: "Actions",
        render: (record) => {
          return (
            <div className="flex">
              <EditOutlined
                style={{ color: "black" }}
                onClick={() => Edit(record, 'edit')}
              />
              <DeleteOutlined
                style={{ color: "red" }}
                onClick={() => Delete(record)}
              />
            </div>
          );
        },
      },
   
  ]