import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Tag } from "antd";
import { Button, Table, Modal, Input, Select, DatePicker } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Nodata from '../Nodata';
const { Option } = Select;


function ShowTable(props) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    function Edit(e){
      console.log(e)
      const {_id, title,description, tags, status} = e;
      const state = {_id, title, description, tags, status}
      navigate('/update', {state});
    }

    function Delete(e) {
      console.log(e)
      const {_id, title,description, tags, status} = e;
      const state = {_id, title, description, tags, status}
      navigate('/delete', {state});
    }

    const colors = ['red', 'green', 'purple', 'pink', 'indigo']

      const columns = [
        {
          id: "1",
          key: "title",
          title: "TItle",
          dataIndex: "title",
        },
        {
          id: "2",
          key: "description",
          title: "Description",
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
                  <Tag color={colors[Math.floor(Math.random()*5)]} key={tag}>
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
            render : status => (
              <>
                <Tag color={status === 'Open' ? 'green' : 'red'} key={status}>
                  {status}
                </Tag>
              </>
            )
          },
          {
            id: "5",
            key: "action",
            title: "Actions",
            render: (record) => {
              console.log(record)
              return (
                <div className="flex">
                  <Button onClick={() => Edit(record)}>
                      <EditOutlined/>
                  </Button>
                  <Button onClick={() => Delete(record)}>
                    <DeleteOutlined/>
                  </Button>
                </div>
              );
            },
          },
      ]


      useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      }, [])

      

    
      return (
        <>
        {
          loading ? 
          <span class="loader"></span>
          : 

            props.data.length === 0 ? 
            <div className='w-1/2 rounded-2xl'>
            <Nodata/>
            </div>
            :
            <Table
            rowClassName={"table-color"} dataSource={props.data} columns={columns}
            pagination={{ pageSize: 20, total: 50, showSizeChanger: false }}
            />
          }
        </>
  )
}

export default ShowTable