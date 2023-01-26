import React, { useEffect } from "react";
import { BarChart, Card, Subtitle, Title, DonutChart } from "@tremor/react";
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
        name: productName[0],
        quantity: productQuantity[0],
    },
    {
        name: productName[1],
        quantity: productQuantity[1]
    },
    {
        name: productName[2],
        quantity: productQuantity[2],
    }, {
        name: productName[3],
        quantity: productQuantity[3]
    }, {
        name: productName[4],
        quantity: productQuantity[4]
    }]
    console.log(result)

    return (
        <Card>
            <Title>Productos de la página</Title>
            <Subtitle>
                Lista de cantidad de productos de la página
            </Subtitle>
            <DonutChart
                data={result}
                category='quantity'
                dataKey='name'
                marginTop='mt-6'
                colors={["slate", "violet", "indigo", "rose", "cyan"]}
            />
        </Card>
    )
}

export default ChartDonut