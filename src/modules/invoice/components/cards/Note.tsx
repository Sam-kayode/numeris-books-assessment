import "./cards.scss"; 

// Define the NoteBoxprops type for the component
interface NoteBoxProps {
  note: string;
}

const NoteBox: React.FC<NoteBoxProps> = ({ note }) => {
  return (
    <div className="note-box mt-6">
      <span className="note-label">NOTE</span>
      <p className="note-content">{note}</p>
    </div>
  );
};

export default NoteBox;
