import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class EditePlate extends React.Component {
  state = {
    modal: false,
    id: this.props.el._id,
    newtitle: this.props.el.name,
    newsrc: this.props.el.image,
    newprice: this.props.el.price,
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>
          Edit
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle}>Edit dish</ModalHeader>
          <ModalBody>
            <p>
              Image{" "}
              <input
                type="text"
                defaultValue={this.props.el.image}
                placeholder="Enter ur URL"
                name="newsrc"
                onChange={this.onChange}
                class="form-control"
              />
            </p>
            <p>Name
            <input
              type="text"
              defaultValue={this.props.el.name}
              placeholder="Enter ur plate's title"
              name="newtitle"
              onChange={this.onChange}
              class="form-control"
            />
             </p>
             <p> Price
            <input
              type="text"
              defaultValue={this.props.el.price}
              placeholder="Enter ur price "
              name="newprice"
              onChange={this.onChange}
              class="form-control"
            /> </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.updateplate({
                  name: this.state.newtitle,
                  image: this.state.newsrc,
                  price: this.state.newprice,
                  id: this.state.id,
                });
              }}
            >
              Change it
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditePlate;
