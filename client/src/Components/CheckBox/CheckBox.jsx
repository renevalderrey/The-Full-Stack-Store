import Form from "react-bootstrap/Form";

function CheckBox() {
  return (
    <Form>
      {["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            style={{
              color: "#fff",
            }}
            type={type}
            id={`default-${type}`}
            label={`Comparar`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckBox;
