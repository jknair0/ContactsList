import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeContactAsync } from '../actions/thunkActions';
import ContactListScreen from './ContactListScreen';

const mapStateToProps = state => ({ contactsState: state });

const mapDispatchToProps = dispatch => bindActionCreators({
  removeContact: removeContactAsync,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen);
