import Header from "../../common/header";
import Card from "../../common/Card";
import { connect } from "react-redux";
import { fetchCharactersList } from "../../../reducer/categoryReducer/categoryAction";
import { useEffect } from "react";

const Characters = ({ getCharactersList, charactersList, loading, error }) => {
  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);

  console.log(charactersList);
  return (
    <div className="container">
      <Header header="Characters" />
      {charactersList.results && <Card cardData={charactersList} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.charactersListReducer.loading,
    error: state.charactersListReducer.error,
    charactersList: state.charactersListReducer.charactersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharactersList: () => dispatch(fetchCharactersList()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Characters);
export default connectComponent;
