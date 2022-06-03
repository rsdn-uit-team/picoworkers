import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
  const isLoading = useSelector((state) => state.common.isLoading);
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff'}}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
