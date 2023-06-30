import "./styles.css";

export default function App() {
  return (
    <div
      style={{ border: "1px solid black", width: "200px", height: "50px" }}
      // className="skeleton"
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          overflow: "hidden"
        }}
      >
        <img
          // src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
          className={"skeleton img"}
        />
      </div>
    </div>
  );
}
