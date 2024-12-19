import { useState, useEffect, useCallback } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HeroSection from '../../components/BoardForm/HeroSectionComponent';
import CardItem from '../../components/BoardForm/CardItemComponent';
import ModalForm from '../../components/ModalFormComponent';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useBoards } from '../../hooks/useBoards';
import { useNavigate } from 'react-router-dom';

export default function BoardListPage() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const { boards, loading, getBoards, addBoard, editBoard, removeBoard } = useBoards();
  const navigate = useNavigate();


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getBoards(); }, []);

  
  const filteredBoards = boards.filter(board => board.name.toLowerCase().includes(search.toLowerCase()));

  
  const handleModal = useCallback((board = null, isDelete = false) => {
    setModalData(board);
    setIsDeleteMode(isDelete);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setModalData(null);
    setIsDeleteMode(false);
  }, []);

  const handlePageChange = (event, value) => setCurrentPage(value);

  
  const boardsPerPage = 9;
  const paginatedBoards = filteredBoards.slice((currentPage - 1) * boardsPerPage, currentPage * boardsPerPage);

  
  const handleConfirmModal = useCallback(() => {
    if (isDeleteMode && modalData) {
      removeBoard(modalData._id);
    } else if (modalData) {
      console.log(modalData)
      modalData._id ? editBoard(modalData._id, modalData) : addBoard(modalData);
    }
    handleCloseModal();
  }, [isDeleteMode, modalData, removeBoard, addBoard, editBoard, handleCloseModal]);

  
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setModalData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
   <Box>
      <HeroSection title="Listado de Tableros" />
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <TextField
            placeholder="Buscar tableros"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flexGrow: 1, mr: 2 }}
          />
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            color="success"
            onClick={() => handleModal()}
          >
            Nuevo Tablero
          </Button>
        </Box>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            Cargando...
          </Box>
        ) : (
          <Grid container spacing={4}>
            {paginatedBoards.map((board) => (
              <Grid item key={board._id} xs={12} sm={6} md={4}>
                <CardItem
                  title={board.name}
                  description={board.description}
                  createdAt={board.createdAt}
                  onEdit={() => handleModal(board)}
                  onView={() => navigate(`/KanbanBoard/${board._id}`)}
                  onDelete={() => handleModal(board, true)}
                />
              </Grid>
            ))}
          </Grid>
        )}
        <Pagination
          count={Math.ceil(filteredBoards.length / boardsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
        />
      </Container>
      <ModalForm
        open={modalOpen}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmModal}
        title={isDeleteMode ? 'Eliminar Tablero' : modalData ? 'Editar Tablero' : 'Crear Tablero'}
      >
        {isDeleteMode ? (
          <Box>
            <p>¿Estás seguro de que quieres eliminar el tablero {modalData?.name}?</p>
          </Box>
        ) : (
          <Box>
            <TextField
              label="Nombre del Tablero"
              name="name"
              value={modalData?.name || ''}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Descripción"
              name="description"
              value={modalData?.description || ''}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        )}
      </ModalForm>
    </Box>
  );
}