import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, createBoard, updateBoard, deleteBoard } from '../store/slice/boardsSlice';

export const useBoards = () => {
  const dispatch = useDispatch();
  const { boards, loading, error } = useSelector((state) => state.boards);

  const getBoards = () => {
    dispatch(fetchBoards());
  };

  const addBoard = (boardData) => {
    dispatch(createBoard(boardData));
  };

  const editBoard = (boardId, updatedData) => {
    dispatch(updateBoard({ boardId, updatedData }));
  };

  const removeBoard = (boardId) => {
    dispatch(deleteBoard(boardId));
  };

  return {
    boards,
    loading,
    error,
    getBoards,
    addBoard,
    editBoard,
    removeBoard,
  };
};