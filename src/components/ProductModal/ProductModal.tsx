import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductService } from "../../services/ProductService";

import { toast } from "react-toastify";

type ProductModalProps = {
    show: boolean;
    onHide:() => void;
    title: string;
    modalType: ModalType;
    prod: Product
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductModal = ({show, onHide, title, modalType, prod, refreshData}: ProductModalProps) => {

    //Create-Update
    const handleSaveUpdate =async (pro:Product) => {
        try {
            const isNew  = prod.id === 0;
            if(isNew) {
                await ProductService.createProduct(pro);
            } else {
                await ProductService.updateProduct(pro.id, pro);
            }
            toast.success(isNew ? "Producto creado" : "Producto actualizado",{
                position:"top-center",
            })
            onHide;
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error");
        }
    };
    //Delete
    const handleDelete = async () => {
        try {
            await ProductService.deleteProduct(prod.id);
            toast.success("El elemento se ha eliminado exitosamente",{
                position:"top-center"
            })
            onHide;
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error("No se ha podido eliminar el objeto")
        }
    }

    const validationSchema =() => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            title: Yup.string().required('Titulo Obligatorio'),
            price: Yup.number().min(0).required("Precio obligatorio"),
            description: Yup.string().min(0).required("Descripcion requerida"),
            category: Yup.string().required("La categoria es requerida"),
            image: Yup.string().required("La url de la imagen es requerida"),
        });
    };

    const formik = useFormik ({
        initialValues: prod,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Product) => handleSaveUpdate(obj),
    });
  return (
    <>
        {modalType === ModalType.DELETE ? (
            <>
            <Modal show={show} onHide={onHide} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>¿Esta seguro que desea eliminar el producto?<br/>
                    <strong> {prod.title} </strong></p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                    <Button variant="danger" onClick={handleDelete}>Confirmar Eliminacion</Button>
                </Modal.Footer>
            </Modal>
            
            </>
        ) : (
            <>
            <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                <Modal.Header>
                    <Modal.Title> { title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        
                        <Form.Group controlId="formTitulo">
                            <Form.Label> Titulo </Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                value={formik.values.title || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group controlId="formPrecio">
                            <Form.Label> Precio </Form.Label>
                            <Form.Control
                                name="price"
                                type="number"
                                value={formik.values.price || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.price && formik.touched.price)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.price}
                            </Form.Control.Feedback>
                        </Form.Group>
                       
                        <Form.Group controlId="formDescripcion">
                            <Form.Label> Descripción </Form.Label>
                            <Form.Control
                                name="decription"
                                type="text"
                                value={formik.values.description || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.description}
                            </Form.Control.Feedback>
                        </Form.Group>
                      
                        <Form.Group controlId="formCategoria">
                            <Form.Label> Categoria </Form.Label>
                            <Form.Control
                                name="category"
                                type="text"
                                value={formik.values.category || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.category}
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group controlId="formImagen">
                            <Form.Label> Imagen </Form.Label>
                            <Form.Control
                                name="image"
                                type="text"
                                value={formik.values.image || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.image && formik.touched.image)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.image}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onHide}> Cancelar </Button>
                            <Button variant="primary" type="submit" disabled={!formik.isValid}> Guardar </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            </>
        )}
    
    </>
    
  )
}

export default ProductModal