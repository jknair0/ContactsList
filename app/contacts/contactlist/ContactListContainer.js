import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeContact } from '../actions/actions';
import ContactListScreen from './ContactListScreen';

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = dispatch => bindActionCreators({
  removeContact,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen);
