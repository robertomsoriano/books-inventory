import React from "react";
import { Modal, Button, Card } from "semantic-ui-react";



const TransModal = (props) => (
    <Modal trigger={<Card raised className="m-4 "><Button basic color='blue'>{props.title}</Button></Card>} centered={true} size='tiny'>
      <Modal.Header>{props.header}</Modal.Header>
      <Modal.Content style={{left: '30'}}>
        {props.children}
      </Modal.Content>
    </Modal>
  )
export default TransModal