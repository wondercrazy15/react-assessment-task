import React,{useState} from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'react-bootstrap'
import jsonData from '../../../employee.json'
import styles from './employee.styles.module.scss'
import { EditIcon, FilterIcon, PlusIcon, SearchIcon, TrashIcon } from "../../../assets/icons";
import Pagination from "../../../components/Pagination/Pagination";
import CustomModal from "../../../components/Modal/Modal";

function EmployeeList() {

  const data = jsonData.employees
  const columns = ['EmployeeCode', 'EmpName', 'JobTitleName', 'EmailAddress', 'Status', 'Action']
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-3 ">
      <div className={`row bg-white p-3 ${styles.empDiv}`} >
        <div className="d-flex align-items-center justify-content-between">
          <div className={styles.search}>
            <SearchIcon />
            <input type="text" className="form-control" placeholder="Search Employee" />
          </div>
          <div className="filter d-flex align-items-center gap-3">
            <button className={styles.addBtn} onClick={handleShow}>
              <PlusIcon />
              Add Employee</button>
            <Dropdown >
              <DropdownToggle className="bg-white text-black border-black">
                <FilterIcon />&nbsp;
                Filter
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Text1
                </DropdownItem>
                <DropdownItem>
                  Text2
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className={styles.tableDiv}>
            <Table hover>
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) && data.length > 0 &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.employeeCode}</td>
                      <td>{item.empName}</td>
                      <td>{item.jobTitleName}</td>
                      <td>{item.emailAddress}</td>
                      <td>
                        <button className={item.status === 'Active' ? styles.activeStatus : styles.inActiveStatus}>{item.status}</button>
                      </td>
                      <td>
                        <EditIcon />
                        <TrashIcon />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
              <Pagination />
          </div>
        </div>
      </div>
      <CustomModal show={show} handleClose={handleClose} title={'Add Employe'} >
        <span>Employee Form</span>
        </CustomModal>
    </div>
  )
};

export default EmployeeList;
