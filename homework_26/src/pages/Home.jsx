import { SmileyFaceVoting } from "../components/SmileyFaceVoiting.jsx";
import { SmileyFaceWinner } from "../components/SmileyFaceWinner.jsx";
import { useCustomHook } from "../hooks/useCustomHook.js";
import { Modal } from "../components/Modal";

const entries = { "😀": 0, "😍": 0, "😎": 0, "🚀": 0, "❤️": 0 };

export const Home = () => {
  const [votes, setVotes, winner, setWinner,showModal,setShowModal] = useCustomHook(entries);
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
      <SmileyFaceVoting
        votes={votes}
        setVotes={setVotes}
        setWinner={setWinner}
        entries={entries}
        setShowModal={setShowModal}
      />

      {showModal && (
        <Modal
          show={showModal}
          title="Повідомлення"
          onClose={() => setShowModal(false)}
        >
          <SmileyFaceWinner winner={winner} votes={votes} />
        </Modal>
      )}
    </>
  );
};
