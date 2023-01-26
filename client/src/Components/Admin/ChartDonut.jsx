import React, { useEffect } from "react";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/action";

const ChartDonut = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const productName = products.filter(item => item.name)
    const productQuantity = products.filter(item => item.quantity)
    console.log(productName)

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const result = [{
        name: productName,
        quantity: productQuantity,
    }]
    console.log(result)

    return (
        <Card>
            <Title>Productos de la página</Title>
            <Subtitle>
                Lista de cantidad de productos de la página
            </Subtitle>
            <BarChart
                data={result}
                dataKey="name"
                categories={["Estadística de productos"]}
                colors={["blue"]}
                marginTop="mt-6"
                yAxisWidth="w-12"
            />
        </Card>
    )
}

export default ChartDonut