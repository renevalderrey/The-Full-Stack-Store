import React from "react";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";
import { useSelector } from "react-redux";

const ChartDonut = () => {
    const products = useSelector(state => state.products)
    const productName = products.filter(item => item.name)
    const productQuantity = products.filter(item => item.quantity)
    const result = [{
        name: productName,
        quantity: productQuantity,
    }]
    
    return (
        <Card>
            <Title>Productos de la página</Title>
            <Subtitle>
                Lista de cantidad de productos de la página
            </Subtitle>
            <BarChart
                data={result}
                dataKey="name"
                categories={["Number of threatened species"]}
                colors={["blue"]}
                marginTop="mt-6"
                yAxisWidth="w-12"
            />
        </Card>
    )
}

export default ChartDonut