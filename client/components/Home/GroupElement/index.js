import React, {Component} from 'react';
import { Link } from 'react-router';
class GroupElement extends Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false,
      editableTitle: "",
    }
  }

  editGroup = () => {
    const { group, index } = this.props;
    const { editableTitle } = this.state;
    this.props.editGroup({
      title: editableTitle
    }, group.get('slug'), index);
    this.setState({ editMode: false });
  }
  render() {
    const { group, index } = this.props;
    const { editMode, editableTitle } = this.state;
    return (
      <div>
        <div style={{ display: "flex" }}>
        <Link to={`/group/${group.get('slug')}/${group.get('_id')}`}><h1>{group.get('title')}</h1></Link>
        <small style={{ marginTop: "8vh", marginLeft: "1vw" }}>{group.get('slug')}</small>
        </div>
        <input type="button" value="Delete" className="btn btn-danger btn-lg" onClick={() => this.props.deleteGroup(group.get('slug'), index)} />
        <input type="button" value="Update" className="btn btn-warning btn-lg" onClick={() => this.setState({ editMode: !editMode, editableTitle: group.get('title') })} />
        <br />
        {editMode && <span style={{ display: "flex" }}><input type="text" className="form-control" value={editableTitle} onChange={(e) => this.setState({ editableTitle: e.target.value })} />
        <input type="button" value="Edit" className="btn btn-warning btn-md" onClick={this.editGroup} /></span>}
      </div>
    )
  }
}

export default GroupElement;
