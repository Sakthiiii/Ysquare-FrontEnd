import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 0,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderEndStartRadius:80,
    borderStartEndRadius:10,
  },
  heading: {
    color: 'gray',
    fontFamily:"arial",
  },
  image: {
    marginLeft: '15px',
  },
}));
