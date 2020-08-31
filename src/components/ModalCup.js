import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import { updateCup } from "../actions/index";

const data = {
  id: "",
  headquarter: "",
  year: "",
  champion: "",
  score: "",
  subChampion: "",
};

function ModalCup({ row }) {
  const [open, setOpen] = React.useState(true);

  const newCup = useSelector((store) => store.newCup);

  const dispatch = useDispatch();

  const addCup = () => {
    const cup = {
      id: data.id.value,
      headquarter: data.headquarter.value,
      year: data.year.value,
      champion: data.champion.value,
      score: data.score.value,
      subChampion: data.subChampion.value,
    };

    dispatch(updateCup(cup));
    setOpen(false);
  };

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Agregar Copa</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Agregar Copa" />
      <Modal.Content>
        <Form>
          <input
            type="text"
            placeholder="Id"
            id="id"
            ref={(node) => {
              data.id = node;
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Sede"
            id="headquarter"
            ref={(node) => {
              data.headquarter = node;
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Año"
            id="year"
            ref={(node) => {
              data.year = node;
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Campeón"
            id="champion"
            ref={(node) => {
              data.champion = node;
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Resultado"
            id="score"
            ref={(node) => {
              data.score = node;
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Sub Campeón"
            id="subChampion"
            ref={(node) => {
              data.subChampion = node;
            }}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Cancelar
        </Button>
        <Button color="green" onClick={() => addCup()}>
          <Icon name="checkmark" /> Continuar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalCup;
