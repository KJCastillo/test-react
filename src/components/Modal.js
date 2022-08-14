import "./Modal.css";

export default function Modal({ children }) {
  return (
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: "tomato",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}