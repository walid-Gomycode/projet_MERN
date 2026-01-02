
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../JS/features/userSlice';

const ManageUsers = () => {
    const dispatch = useDispatch();
    const { listUsers } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])  /// [dispatch] : react hook dependency array  : rerender the effect only if dispatch changes to avoid
                    // to avoid warning about missing dependency in useEffect
    console.log(listUsers);
  return (
    <div>manageUsers</div>
  )
}

export default ManageUsers