import { useForm } from "react-hook-form";
import { postProduct } from "../../Redux/action";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import stl from "./FormProducts.module.css";
import UploadImages from "../UploadImages/UploadImages";

export default function MyForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(postProduct(data));
  };
  return (
    <>
      <Header />
      <Form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <div className={stl.title}>
          <h1>Crear Producto Nuevo</h1>
        </div>
        <div className={stl.container}>
          <Form.Group className="mb-8" controlId="formBasicEmail">
            <div className={stl.item}>
              <Form.Label>
                Name:
                <Form.Control
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && <p>name is required </p>}
              </Form.Label>
            </div>
            <div className={stl.item}>
              <UploadImages />
              {/* <Form.Label>
                Image:
                <Form.Control
                  type="text"
                  {...register("image", { required: true })}
                />
                {errors.image?.type === "required" && <p>image is required </p>}
              </Form.Label> */}
            </div>
            <div className={stl.item}>
              <Form.Label>
                Brand:
                <Form.Control type="text" {...register("brand")} />
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Price:
                <Form.Control
                  type="number"
                  step="0.01"
                  {...register("price", { required: true })}
                />
                {errors.price?.type === "required" && <p>price is required </p>}
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Quantity:
                <Form.Control
                  type="number"
                  {...register("quantity", { required: true })}
                />
                {errors.quantity?.type === "required" && (
                  <p>quantity is required </p>
                )}
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Compatible:
                <Form.Control type="text" {...register("compatible")} />
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Favorites:
                <Form.Control type="text" {...register("favorites")} />
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Calification:
                <Form.Control type="text" {...register("calification")} />
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Comments:
                <Form.Control type="text" {...register("comments")} />
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Categories:
                <Form.Control type="text" {...register("categories")} />
              </Form.Label>
            </div>
            <div className={stl.item}>
              <Form.Label>
                Description:
                <Form.Control type="text" {...register("description")} />
              </Form.Label>
            </div>
          </Form.Group>
        </div>
        <div className={stl.button}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        
      </Form>
      <Footer />
    </>
  );
}
